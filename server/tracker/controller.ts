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
  GetTrackerQuery,
} from "../../shared/interfaces";

export const trackerRouter = Router();

trackerRouter.post(API.TRACKER_REDUX, async (req: TypedRequest<ReduxOperation>, res: Response) => {
  const { source, action, reduceTime, commitTime, affectedItems } = req.body;

  const time: ReduxOperationTime = { reduceTime, commitTime };

  console.log(`[${TrackerSources[source]}][${TrackerActions[action]}] [redux variation] ${reduceTime}ms + ${commitTime}ms. ${affectedItems} objects affected`);

  const existing = await TrackerModel.findOne({ source, action, affectedItems });
  if (existing) {
    existing.sampleCount += 1;
    const timeList = [...existing.timeList, time];
    existing.timeList = timeList;

    const timeSum: ReduxOperationTime = timeList
      .reduce<ReduxOperationTime>((acc: ReduxOperationTime, item: ReduxOperationTime) => ({
        reduceTime: acc.reduceTime + item.reduceTime,
        commitTime: acc.commitTime + item.commitTime,
      }), { reduceTime: 0, commitTime: 0 });

    existing.averageTime = {
      reduceTime: Number((timeSum.reduceTime / timeList.length).toFixed(2)),
      commitTime: Number((timeSum.commitTime / timeList.length).toFixed(2)),
    };

    existing.save();

    return res.status(201);
  }

  const tracker: ITracker<ReduxOperationTime> = {
    source,
    action,
    timeList: [time],
    averageTime: time,
    affectedItems,
    sampleCount: 1,
  };

  new TrackerModel(tracker).save();

  return res.sendStatus(201);
});

trackerRouter.post(API.TRACKER_REDUX_SAGA, async (
  req: TypedRequest<ReduxSagaOperation>,
  res: Response,
) => {
  const { source, action, sagaTime, reduceTime, commitTime, affectedItems } = req.body;

  console.log(`[${TrackerSources[source]}][${TrackerActions[action]}] [redux-saga variation]:  ${sagaTime}ms + ${reduceTime}ms + ${commitTime}ms. ${affectedItems} objects affected`);

  const time: ReduxSagaOperationTime = { sagaTime, reduceTime, commitTime };

  const existing = await TrackerModel.findOne({ source, action, affectedItems });
  if (existing) {
    existing.sampleCount += 1;
    const timeList = [...existing.timeList, time];
    existing.timeList = timeList;

    const timeSum: ReduxSagaOperationTime = timeList.reduce<ReduxSagaOperationTime>(
      (acc: ReduxSagaOperationTime, item: ReduxSagaOperationTime) => ({
        sagaTime: acc.sagaTime + item.sagaTime,
        reduceTime: acc.reduceTime + item.reduceTime,
        commitTime: acc.commitTime + item.commitTime,
      }), { sagaTime: 0, reduceTime: 0, commitTime: 0 },
    );

    existing.averageTime = {
      sagaTime: Number((timeSum.sagaTime / timeList.length).toFixed(2)),
      reduceTime: Number((timeSum.reduceTime / timeList.length).toFixed(2)),
      commitTime: Number((timeSum.commitTime / timeList.length).toFixed(2)),
    };

    existing.save();

    return res.status(201);
  }

  const tracker: ITracker<ReduxSagaOperationTime> = {
    source,
    action,
    timeList: [time],
    averageTime: time,
    affectedItems,
    sampleCount: 1,
  };

  new TrackerModel(tracker).save();

  return res.sendStatus(201);
});

trackerRouter.post(API.TRACKER_MOBX, async (
  req: TypedRequest<MobxObservableActionOperation>,
  res: Response,
) => {
  const { source, action, initTime, commitTime, affectedItems } = req.body;

  const time: MobxOperationTime = { initTime, commitTime };

  console.log(`[${TrackerSources[source]}][${TrackerActions[action]}] [mobx action+observable variation]:  ${initTime}ms + ${commitTime}ms. ${affectedItems} objects affected`);

  const existing = await TrackerModel.findOne({ source, action, affectedItems });
  if (existing) {
    existing.sampleCount += 1;
    const timeList = [...existing.timeList, time];
    existing.timeList = timeList;

    const timeSum: MobxOperationTime = timeList.reduce<MobxOperationTime>(
      (acc: MobxOperationTime, item: MobxOperationTime) => ({
        initTime: acc.initTime + item.initTime,
        commitTime: acc.commitTime + item.commitTime,
      }), { initTime: 0, commitTime: 0 },
    );

    existing.averageTime = {
      initTime: Number((timeSum.initTime / timeList.length).toFixed(2)),
      commitTime: Number((timeSum.commitTime / timeList.length).toFixed(2)),
    };

    existing.save();

    return res.status(201);
  }

  const tracker: ITracker<MobxOperationTime> = {
    source,
    action,
    timeList: [time],
    averageTime: time,
    affectedItems,
    sampleCount: 1,
  };

  new TrackerModel(tracker).save();

  return res.sendStatus(201);
});

trackerRouter.get(API.TRACKER, async (req: Request, res: Response) => {
  const query = req.query as GetTrackerQuery;

  console.log("getter query", query);

  const trackers = await TrackerModel
    .where("source").equals(Number(query.source))
    .where("action").equals(Number(query.action))
    .limit(Number(query.limit));

  console.log(trackers);

  return res.status(200).send(trackers);
});
