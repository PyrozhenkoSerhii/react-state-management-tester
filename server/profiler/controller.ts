import { Router, Response, Request } from "express";

import { API } from "../../shared/api";
import { TypedRequest } from "../interfaces/Request";
import { IProfilerData, ProfilerModel } from "./model";
import {
  TrackerSources,
  ProfilerRequest,
  GetProfilerQuery,
} from "../../shared/interfaces";

export const profilerRouter = Router();

type AverageProfiler = Omit<ProfilerRequest, "count" | "source">;

profilerRouter.post(API.PROFILER, async (req: TypedRequest<ProfilerRequest>, res:Response) => {
  const { source, avg, count } = req.body;

  console.log(`[Profiler][${TrackerSources[source]}]: Updated ${count} elements. Took ${avg}ms in average for elelement rerendering`);

  const existing = await ProfilerModel.findOne({ source, count });
  if (existing) {
    const allTests = [...existing.previous, req.body];
    existing.previous = allTests;

    const averageProfiler: AverageProfiler = allTests
      .reduce<AverageProfiler>((acc: AverageProfiler, item: AverageProfiler) => ({
        avg: acc.avg + item.avg,
        min: acc.min + item.min,
        max: acc.max + item.max,
      }), { avg: 0, min: 0, max: 0 });

    existing.max = +(averageProfiler.max / allTests.length).toFixed(2);
    existing.min = +(averageProfiler.min / allTests.length).toFixed(2);
    existing.avg = +(averageProfiler.avg / allTests.length).toFixed(2);

    existing.attempts += 1;

    existing.save();

    return res.status(201).send({ updated: existing });
  }

  const profiler: IProfilerData = {
    ...req.body,
    previous: [req.body],
    attempts: 1,
  };

  new ProfilerModel(profiler).save();

  return res.status(201).send({ new: profiler });
});

profilerRouter.get(API.PROFILER, async (req: Request, res: Response) => {
  const query = req.query as GetProfilerQuery;

  const profilers = await ProfilerModel.where("source").equals(Number(query.source));

  return res.status(200).send(profilers);
});
