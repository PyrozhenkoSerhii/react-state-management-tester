import { Request, Response, Router } from "express";

import { BlogModel } from "./model";
import { API } from "../../shared/api";

export const blogsRouter = Router();

blogsRouter.get(API.BLOGS, async (req: Request, res: Response) => {
  const blogs = await BlogModel.find(req.query);
  res.status(200).send(blogs);
});

blogsRouter.post(API.BLOGS, async (req: Request, res: Response) => {
  const blog = new BlogModel({ ...req.body });

  const validationError = blog.validateSync();
  if (validationError) return res.status(400).send({ error: validationError.errors });

  await blog.save();
  return res.status(201);
});
