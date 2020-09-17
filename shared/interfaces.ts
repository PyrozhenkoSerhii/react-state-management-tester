export enum TrackerPositions {
  ReduxReduce = 1,
  ReduxSaga = 2,
  ReduxCommit = 3,
  MobxActionInit = 4,
  MobxActionCommit = 5,
}

export enum TrackerSources {
  ReduxV1 = 1,
  ReduxV2 = 2,
  MobxV1 = 3,
  ContextV1 = 4
}

export enum TrackerActions {
  FetchBlogList = 1,
  FilterBlogList = 2,
}

export interface OperationPart {
  source: TrackerSources;
  action: TrackerActions;
  position: TrackerPositions;
  time: number;
  dataSize?: number;
}

export type OperationPartTimestamp = OperationPart & {
  state: "started"|"finished";
}

interface BaseOperation {
  source: TrackerSources;
  action: TrackerActions;
  dataSize: number;
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
