import { Schema, model, Document } from "mongoose";
import {
  TrackerActions,
  TrackerSources,
  MobxOperationTime,
  ReduxOperationTime,
  ReduxSagaOperationTime,
} from "../../shared/interfaces";

export type TrackerTime = MobxOperationTime | ReduxOperationTime | ReduxSagaOperationTime

export interface ITracker<T> {
  source: TrackerSources;
  action: TrackerActions;
  time: TrackerTime;
  dataSize: number;
}

export type Tracker = ITracker<TrackerTime> & Document

const TrackerSchema = new Schema({
  source: {
    type: Number,
    enum: Object.values(TrackerSources).filter((v) => typeof v === "number"),
    required: true,
  },
  action: {
    type: Number,
    enum: Object.values(TrackerSources).filter((v) => typeof v === "number"),
    required: true,
  },
  // TODO: use actual type
  time: Object,
  dataSize: {
    type: Number,
    required: true,
  },
}, {
  versionKey: false,
  timestamps: true,
});

export const TrackerModel = model<Tracker>("Tracker", TrackerSchema);
