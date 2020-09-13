import { Router, Response, Request } from "express";
import { UserModel } from "./model";

import { API } from "../../shared/api";

export const userRouter = Router();

userRouter.get(API.USERS, async (req: Request, res: Response) => {
  const users = await UserModel.find();
  res.status(200).send(users);
});
