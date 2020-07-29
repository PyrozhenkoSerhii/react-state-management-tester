import { Request, Response, Router } from "express";

import { BlogModel } from "./model";

export const blogsRouter = Router();

/**
 * @swagger
 * /api/blogs:
 *  get:
 *    description: Used to request all blogs
 *    responses:
 *      '200':
 *        description: A successful response
 *        content: {
 *          application/json
 *        }
 *  post:
 *    desccription: Create new blog
 */
blogsRouter.get("/blogs", async (req: Request, res: Response) => {
  const blogs = await BlogModel.find(req.query);
  res.status(200).send(blogs);
});


blogsRouter.post("/blogs", async (req: Request, res: Response) => {
  const blog = new BlogModel({ ...req.body });

  const validationError = blog.validateSync();
  if (validationError) return res.status(400).send({ error: validationError.errors });

  await blog.save();
  return res.status(201);
});
