import { Router, Response, Request } from "express";

import { API } from "../../shared/api";
import { TypedRequest } from "../interfaces/Request";
import { ITracker, TrackerModel } from "./model";
import {
  MobxOperation,
  ReduxOperation,
  ReduxSagaOperation,
  ContextOperation,
  TrackerSources,
  TrackerActions,
  MobxOperationTime,
  ReduxOperationTime,
  ReduxSagaOperationTime,
  ContextOperationTime,
  GetTrackerQuery,
} from "../../shared/interfaces";

export const trackerRouter = Router();

trackerRouter.post(API.TRACKER_REDUX, async (req: TypedRequest<ReduxOperation>, res: Response) => {
  const { source, action, dispatchReducerTime, commitTime, affectedItems } = req.body;

  const time: ReduxOperationTime = { dispatchReducerTime, commitTime };

  console.log(`[${TrackerSources[source]}][${TrackerActions[action]}]: ${dispatchReducerTime}ms + ${commitTime}ms. ${affectedItems} objects affected`);

  const existing = await TrackerModel.findOne({ source, action, affectedItems });
  if (existing) {
    existing.sampleCount += 1;
    const timeList = [...existing.timeList, time];
    existing.timeList = timeList;

    const timeSum: ReduxOperationTime = timeList
      .reduce<ReduxOperationTime>((acc: ReduxOperationTime, item: ReduxOperationTime) => ({
        dispatchReducerTime: acc.dispatchReducerTime + item.dispatchReducerTime,
        commitTime: acc.commitTime + item.commitTime,
      }), { dispatchReducerTime: 0, commitTime: 0 });

    existing.averageTime = {
      dispatchReducerTime: Number((timeSum.dispatchReducerTime / timeList.length).toFixed(2)),
      commitTime: Number((timeSum.commitTime / timeList.length).toFixed(2)),
    };

    existing.save();

    return res.sendStatus(201);
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
  const {
    source, action, dispatchSagaTime, dispatchReducerTime, commitTime, affectedItems,
  } = req.body;

  console.log(`[${TrackerSources[source]}][${TrackerActions[action]}]:  ${dispatchSagaTime}ms + ${dispatchReducerTime}ms + ${commitTime}ms. ${affectedItems} objects affected`);

  const time: ReduxSagaOperationTime = { dispatchSagaTime, dispatchReducerTime, commitTime };

  const existing = await TrackerModel.findOne({ source, action, affectedItems });
  if (existing) {
    existing.sampleCount += 1;
    const timeList = [...existing.timeList, time];
    existing.timeList = timeList;

    const timeSum: ReduxSagaOperationTime = timeList.reduce<ReduxSagaOperationTime>(
      (acc: ReduxSagaOperationTime, item: ReduxSagaOperationTime) => ({
        dispatchSagaTime: acc.dispatchSagaTime + item.dispatchSagaTime,
        dispatchReducerTime: acc.dispatchReducerTime + item.dispatchReducerTime,
        commitTime: acc.commitTime + item.commitTime,
      }), { dispatchSagaTime: 0, dispatchReducerTime: 0, commitTime: 0 },
    );

    existing.averageTime = {
      dispatchSagaTime: Number((timeSum.dispatchSagaTime / timeList.length).toFixed(2)),
      dispatchReducerTime: Number((timeSum.dispatchReducerTime / timeList.length).toFixed(2)),
      commitTime: Number((timeSum.commitTime / timeList.length).toFixed(2)),
    };

    existing.save();

    return res.sendStatus(201);
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
  req: TypedRequest<MobxOperation>,
  res: Response,
) => {
  const { source, action, initTime, commitTime, affectedItems } = req.body;

  const time: MobxOperationTime = { initTime, commitTime };

  console.log(`[${TrackerSources[source]}][${TrackerActions[action]}]:  ${initTime}ms + ${commitTime}ms. ${affectedItems} objects affected`);

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

    return res.sendStatus(201);
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

trackerRouter.post(API.TRACKER_CONTEXT, async (
  req: TypedRequest<ContextOperation>,
  res: Response,
) => {
  const {
    source, action, initTime, dispatchReducerTime, commitTime, affectedItems,
  } = req.body;

  console.log(`[${TrackerSources[source]}][${TrackerActions[action]}]:  ${initTime}ms + ${dispatchReducerTime}ms + ${commitTime}ms. ${affectedItems} objects affected`);

  const time: ContextOperationTime = { initTime, dispatchReducerTime, commitTime };

  const existing = await TrackerModel.findOne({ source, action, affectedItems });
  if (existing) {
    existing.sampleCount += 1;
    const timeList = [...existing.timeList, time];
    existing.timeList = timeList;

    const timeSum: ContextOperationTime = timeList.reduce<ContextOperationTime>(
      (acc: ContextOperationTime, item: ContextOperationTime) => ({
        initTime: acc.initTime + item.initTime,
        dispatchReducerTime: acc.dispatchReducerTime + item.dispatchReducerTime,
        commitTime: acc.commitTime + item.commitTime,
      }), { initTime: 0, dispatchReducerTime: 0, commitTime: 0 },
    );

    existing.averageTime = {
      initTime: Number((timeSum.initTime / timeList.length).toFixed(2)),
      dispatchReducerTime: Number((timeSum.dispatchReducerTime / timeList.length).toFixed(2)),
      commitTime: Number((timeSum.commitTime / timeList.length).toFixed(2)),
    };

    existing.save();

    return res.sendStatus(201);
  }

  const tracker: ITracker<ContextOperationTime> = {
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

  const trackers = await TrackerModel
    .where("source").equals(Number(query.source))
    .where("action").equals(Number(query.action))
    .limit(Number(query.limit));

  return res.status(200).send(trackers);
});
