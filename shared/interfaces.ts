export enum TrackerPositions {
  REDUX_REDUCE = 1,
  REDUX_SAGA = 2,
  REDUX_COMMIT = 3,
  MOBX_ACTION_INIT = 4,
  MOBX_ACTION_COMMIT = 5,
}

export enum TrackerSources {
  REDUX_V1 = 1,
  REDUX_V2 = 2,
  MOBX_V1 = 3,
  CONTEXT_V1 = 4
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
  sagaTime: number;
  reduceTime: number;
  commitTime: number;
}

export interface ReduxOperationTime {
  reduceTime: number;
  commitTime: number;
}

export interface MobxOperationTime {
  initTime: number;
  commitTime: number;
}

export interface ReduxSagaOperation extends BaseOperation, ReduxSagaOperationTime {}

export interface ReduxOperation extends BaseOperation, ReduxOperationTime {}

export interface MobxObservableActionOperation extends BaseOperation, MobxOperationTime {}

export type TrackerDataList = Array<MobxObservableActionOperation|ReduxOperation|ReduxSagaOperation>

export interface GetTrackerQuery {
  source?: TrackerSources;
  action?: TrackerActions;
  limit?: number;
}
