import { Router, Response } from "express";

import { MobxObservableActionOperation, ReduxOperation, ReduxSagaOperation, TrackerSources, TrackerActions } from "../../shared/interfaces";
import { API } from "../../shared/api";
import { TypedRequest } from "../interfaces/Request";

export const trackerRouter = Router();

trackerRouter.post(API.TRACKER_REDUX, (req: TypedRequest<ReduxOperation>, res: Response) => {
  const { source, action, reduceTime, commitTime } = req.body;
  console.log(`[${TrackerSources[source]}][${TrackerActions[action]}] [redux variation] ${reduceTime}ms + ${commitTime}ms`);

  res.sendStatus(201);
});

trackerRouter.post(API.TRACKER_REDUX_SAGA, (
  req: TypedRequest<ReduxSagaOperation>,
  res: Response,
) => {
  const { source, action, sagaTime, reduceTime, commitTime } = req.body;

  console.log(`[${TrackerSources[source]}][${TrackerActions[action]}] [redux-saga variation]:  ${sagaTime}ms + ${reduceTime}ms + ${commitTime}ms`);

  res.sendStatus(201);
});

trackerRouter.post(API.TRACKER_MOBX, (
  req: TypedRequest<MobxObservableActionOperation>,
  res: Response,
) => {
  const { source, action, initTime, commitTime } = req.body;

  console.log(`[${TrackerSources[source]}][${TrackerActions[action]}] [mobx action+observable variation]:  ${initTime}ms + ${commitTime}ms`);

  res.sendStatus(201);
});
