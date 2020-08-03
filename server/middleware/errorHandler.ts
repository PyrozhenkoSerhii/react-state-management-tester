/* eslint-disable @typescript-eslint/no-unused-vars */
import { Request, Response, NextFunction } from "express";
import { logger } from "../utils/logger";


export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
  next: NextFunction,
): void => {
  logger.error(error.stack);
  res.status(500).send({ error: error.message });
};
