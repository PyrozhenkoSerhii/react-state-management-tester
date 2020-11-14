import { Schema, model, Document } from "mongoose";
import { ProfilerRequest, TrackerSources } from "../../shared/interfaces";

export interface IProfilerData extends ProfilerRequest {
  previous: Array<ProfilerRequest>
  attempts: number;
}

export interface IProfiler extends IProfilerData, Document {}

const ProfilerSchema = new Schema({
  source: {
    type: Number,
    enum: Object.values(TrackerSources).filter((v) => typeof v === "number"),
    required: true,
  },
  min: {
    type: Number,
    required: true,
  },
  max: {
    type: Number,
    required: true,
  },
  avg: {
    type: Number,
    required: true,
  },
  count: {
    type: Number,
    required: true,
  },
  previous: Array,
  attempts: Number,
}, {
  versionKey: false,
  timestamps: true,
});

export const ProfilerModel = model<IProfiler>("Profiler", ProfilerSchema);
