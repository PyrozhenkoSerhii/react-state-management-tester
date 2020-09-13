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
}

export type OperationPartTimestamp = OperationPart & {
  state: "started"|"finished";
}

export interface ReduxSagaOperation {
  source: TrackerSources;
  action: TrackerActions;
  sagaTime: number;
  reduceTime: number;
  commitTime: number;
}

export interface ReduxOperation {
  source: TrackerSources;
  action: TrackerActions;
  reduceTime: number;
  commitTime: number;
}

export interface MobxObservableActionOperation {
  source: TrackerSources;
  action: TrackerActions;
  initTime: number;
  commitTime: number;
}
