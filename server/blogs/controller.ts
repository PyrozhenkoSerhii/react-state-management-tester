import { Request, Response, Router } from "express";

import { BlogModel } from "./model";

export const blogsRouter = Router();


blogsRouter.get("/list", async (req: Request, res: Response) => {
  const blogs = await BlogModel.find(req.query);
  res.status(200).send(blogs);
});
