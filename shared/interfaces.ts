/* eslint-disable max-len */
export enum TrackerPositions {
  REDUX_DISPATCH_SAGA = 1,
  REDUX_DISPATCH_REDUCER = 2,
  REDUX_COMMIT = 3,
  MOBX_ACTION_INIT = 4,
  MOBX_ACTION_COMMIT = 5,
  CONTEXT_INIT = 6,
  CONTEXT_DISPATCH_REDUCER = 7,
  CONTEXT_COMMIT = 8,
}

export enum TrackerSources {
  REDUX_V1 = 1,
  REDUX_V2 = 2,
  MOBX_V1 = 3,
  MOBX_V2 = 4,
  CONTEXT_V1 = 5,
}

export enum TrackerActions {
  FETCH_BLOG_LIST = 1,
  CHECKBOX_FILTER = 2,
}

export interface OperationPart {
  source: TrackerSources;
  action: TrackerActions;
  position: TrackerPositions;
  time: number;
  affectedItems?: number;
}

export type OperationPartTimestamp = OperationPart & {
  state: "started"|"finished";
}

interface BaseOperation {
  source: TrackerSources;
  action: TrackerActions;
  affectedItems: number;
}

export interface ReduxSagaOperationTime {
  dispatchSagaTime: number;
  dispatchReducerTime: number;
  commitTime: number;
}

export interface ReduxOperationTime {
  dispatchReducerTime: number;
  commitTime: number;
}

export interface MobxOperationTime {
  initTime: number;
  commitTime: number;
}

export interface ContextOperationTime {
  initTime: number;
  dispatchReducerTime: number;
  commitTime: number;
}

export type TrackerTime = MobxOperationTime | ReduxOperationTime | ReduxSagaOperationTime | ContextOperationTime

export interface ReduxSagaOperation extends BaseOperation, ReduxSagaOperationTime {}

export interface ReduxOperation extends BaseOperation, ReduxOperationTime {}

export interface MobxOperation extends BaseOperation, MobxOperationTime {}

export interface ContextOperation extends BaseOperation, ContextOperationTime {}

export type TrackerDataList = Array<MobxOperation|ReduxOperation|ReduxSagaOperation|ContextOperation>

export interface GetTrackerQuery {
  source?: TrackerSources;
  action?: TrackerActions;
  limit?: number;
}
