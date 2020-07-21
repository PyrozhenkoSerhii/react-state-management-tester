import { Request, Response, Router } from "express";

import Blog from "./model";
import { mockBlogs } from "../mocks/blogs";


export const blogsRouter = Router();


blogsRouter.get("/list", async (req: Request, res: Response) => {
  const blogs = await Blog.find(req.query);
  res.status(200).send(blogs);
});

blogsRouter.post("/init", async (req, res) => {
  await Blog.insertMany(mockBlogs);
  res.status(201);
});
