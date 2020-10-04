import { Schema, model, Document } from "mongoose";
import { TrackerActions, TrackerSources, TrackerTime } from "../../shared/interfaces";

export interface ITracker<T> {
  source: TrackerSources;
  action: TrackerActions;
  timeList: Array<TrackerTime>;
  averageTime: TrackerTime;
  affectedItems: number;
  sampleCount: number;
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
  // TODO: use actual types for averageTime and timeList
  averageTime: Object,
  timeList: Object,
  affectedItems: {
    type: Number,
    required: true,
  },
  sampleCount: {
    type: Number,
    required: true,
  },
}, {
  versionKey: false,
  timestamps: true,
});

export const TrackerModel = model<Tracker>("Tracker", TrackerSchema);
