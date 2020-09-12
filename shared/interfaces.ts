export enum TrackerPositions {
  ReduxReduce,
  ReduxSaga,
  ReduxCommit,
  MobxActionInit,
  MobxActionCommit,
}

export enum TrackerSources {
  ReduxV1,
  ReduxV2,
  MobxV1,
  ContextV1
}

export enum TrackerActions {
  FetchBlogList,
  FilterBlogList,
  UpdateFilter,
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
