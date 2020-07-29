import { Request, Response } from "express";
import { logger } from "../utils/logger";


export const errorHandler = (
  error: Error,
  req: Request,
  res: Response,
): void => {
  logger.error(error.stack);
  res.status(500).send({ error: error.message });
};
