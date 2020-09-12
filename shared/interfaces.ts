export enum TimeTrackingActions {
  INIT,
  PROCESS,
  COMMIT,
}

export enum TimeTrackingSources {
  ReduxV1,
  MobxV1,
  ContextV1
}

export interface TimeTrackingPOSTRequest {
  title: string;
  source: TimeTrackingSources;
  action: TimeTrackingActions;
  time: number;
}
