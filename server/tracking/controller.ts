/* eslint-disable consistent-return */
import { Request, Response, Router } from "express";
import { createClient, print } from "redis";

import { TimeTrackingPOSTRequest, TimeTrackingSources, TimeTrackingActions } from "../../shared/interfaces";

const client = createClient();

export const trackingRouter = Router();

interface TypedRequest<T> extends Request {
  body: T
}

const createRedisKey = (source: TimeTrackingSources, action: TimeTrackingActions, title: string): string => `[${TimeTrackingSources[source]}] [${TimeTrackingActions[action]}] ${title}`;
trackingRouter.post("/tracking", (req: TypedRequest<TimeTrackingPOSTRequest>, res: Response) => {
  const {
    title, action, source, time,
  } = req.body;

  const operationKey = createRedisKey(source, action, title);
  console.log(operationKey, time);

  return res.status(202).send({});

  // if (action === TimeTrackingActions.COMMIT) {
  //   const checkOperation = createRedisKey(source, TimeTrackingActions.INIT, title);

  //   client.get(checkOperation, (testErr, testReply) => {
  //     if (!testReply) {
  //       console.log("nothing");
  //       return res.status(204);
  //     }

  //     console.log("go");

  //     client.get(operationKey, (err, reply) => {
  //       if (!reply) {
  //         client.set(operationKey, time.toString(), print);
  //         return res.status(202);
  //       }

  //       const prevTime = Number(reply.toString());
  //       const diff = time - prevTime;
  //       console.log(diff);
  //       return res.status(201);
  //     });
  //   });
  // }
});
