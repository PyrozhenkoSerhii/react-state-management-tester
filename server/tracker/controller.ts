import { Router, Request, Response } from "express";
import { TrackerRequest, TrackerSources, TrackerPositions, TrackerActions } from "../../shared/interfaces";

export const trackerRouter = Router();

interface TypedRequest<T> extends Request {
  body: T;
}

trackerRouter.post("/tracker", (req: TypedRequest<TrackerRequest>, res: Response) => {
  const { source, action, position, title, time } = req.body;
  console.log(`[${TrackerSources[source]}][${TrackerActions[action]}][${TrackerPositions[position]}] ${title || ""}: ${time}ms`);

  res.sendStatus(201);
});
