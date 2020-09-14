import { Router, Response, Request } from "express";

import { API } from "../../shared/api";
import { TypedRequest } from "../interfaces/Request";
import { ITracker, TrackerModel } from "./model";
import {
  MobxObservableActionOperation,
  ReduxOperation,
  ReduxSagaOperation,
  TrackerSources,
  TrackerActions,
  MobxOperationTime,
  ReduxOperationTime,
  ReduxSagaOperationTime,
} from "../../shared/interfaces";

export const trackerRouter = Router();

trackerRouter.post(API.TRACKER_REDUX, (req: TypedRequest<ReduxOperation>, res: Response) => {
  const { source, action, reduceTime, commitTime } = req.body;

  console.log(`[${TrackerSources[source]}][${TrackerActions[action]}] [redux variation] ${reduceTime}ms + ${commitTime}ms`);

  const tracker: ITracker<ReduxOperationTime> = {
    source,
    action,
    time: {
      reduceTime,
      commitTime,
    },
  };

  new TrackerModel(tracker).save();

  res.sendStatus(201);
});

trackerRouter.post(API.TRACKER_REDUX_SAGA, (
  req: TypedRequest<ReduxSagaOperation>,
  res: Response,
) => {
  const { source, action, sagaTime, reduceTime, commitTime } = req.body;

  console.log(`[${TrackerSources[source]}][${TrackerActions[action]}] [redux-saga variation]:  ${sagaTime}ms + ${reduceTime}ms + ${commitTime}ms`);

  const tracker: ITracker<ReduxSagaOperationTime> = {
    source,
    action,
    time: {
      sagaTime,
      reduceTime,
      commitTime,
    },
  };

  new TrackerModel(tracker).save();

  res.sendStatus(201);
});

trackerRouter.post(API.TRACKER_MOBX, (
  req: TypedRequest<MobxObservableActionOperation>,
  res: Response,
) => {
  const { source, action, initTime, commitTime } = req.body;

  const tracker: ITracker<MobxOperationTime> = {
    source,
    action,
    time: {
      initTime,
      commitTime,
    },
  };

  new TrackerModel(tracker).save();

  console.log(`[${TrackerSources[source]}][${TrackerActions[action]}] [mobx action+observable variation]:  ${initTime}ms + ${commitTime}ms`);

  res.sendStatus(201);
});

trackerRouter.get(API.TRACKER, async (req: Request, res: Response) => {
  const trackers = await TrackerModel.find({});
  return res.status(200).send(trackers);
});
