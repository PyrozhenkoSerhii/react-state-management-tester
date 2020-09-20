/* eslint-disable max-len */
import { ITracker } from "../../../../server/tracker/model";
import { ReduxOperationTime, MobxOperationTime, ReduxSagaOperationTime } from "../../../../shared/interfaces";

export interface ReduxTrackerPresentation extends ITracker<ReduxOperationTime>, ReduxOperationTime {}
export interface ReduxSagaTrackerPresentation extends ITracker<ReduxSagaOperationTime>, ReduxSagaOperationTime {}
export interface MobxTrackerPresentation extends ITracker<MobxOperationTime>, MobxOperationTime {}

export type PresentationTracker = ReduxSagaTrackerPresentation
                                | ReduxTrackerPresentation
                                | MobxTrackerPresentation
