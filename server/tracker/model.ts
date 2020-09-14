import { Schema, model, Document } from "mongoose";
import {
  TrackerActions,
  TrackerSources,
  MobxOperationTime,
  ReduxOperationTime,
  ReduxSagaOperationTime,
} from "../../shared/interfaces";

type TrackerTime = MobxOperationTime | ReduxOperationTime | ReduxSagaOperationTime

export interface ITracker<T> {
  source: TrackerSources;
  action: TrackerActions;
  time: T;
}

export type Tracker = ITracker<TrackerTime> & Document

const TrackerSchema = new Schema({
  source: {
    type: Number,
    enum: Object.values(TrackerSources).filter((v) => typeof v === "number"),
  },
  action: {
    type: Number,
    enum: Object.values(TrackerSources).filter((v) => typeof v === "number"),
  },
  // TODO: use actual type
  time: Object,
}, {
  versionKey: false,
  timestamps: true,
});

export const TrackerModel = model<Tracker>("Tracker", TrackerSchema);
