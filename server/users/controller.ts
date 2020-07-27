import { Router, Response, Request } from "express";
import { UserModel } from "./model";

export const userRouter = Router();

userRouter.get("/list", async (req: Request, res: Response) => {
  const users = await UserModel.find();
  res.status(200).send(users);
});
