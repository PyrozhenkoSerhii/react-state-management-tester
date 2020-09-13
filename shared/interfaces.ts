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
  UpdateFilter = 3,
}

export interface TrackerRequest {
  source: TrackerSources;
  action: TrackerActions;
  position: TrackerPositions;
  time: number;
  title?: string;
}

export interface TrackerTimestamp {
  source: TrackerSources;
  action: TrackerActions;
  position: TrackerPositions;
  state: "started"|"finished";
  timestamp: number;
  title?: string;
}
