import { createLogger, format, transports } from "winston";

import * as config from "config";

const { combine } = format;

const enviroment = process.env.NODE_ENV || "development";

export const logger = createLogger({
  format: combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
    format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
  ),
  transports: [
    new transports.Console({
      silent: enviroment === "test",
      format: combine(
        format.colorize(),
        format.timestamp({ format: "HH:mm:ss" }),
        format.printf((info) => `${info.timestamp} ${info.level}: ${info.message}`),
      ),
    }),
    new transports.File({
      filename: config.get("api.logs.warning"),
      level: "warn",
      silent: enviroment === "test",
    }),
    new transports.File({
      filename: config.get("api.logs.error"),
      level: "error",
      silent: enviroment === "test",
    }),
  ],
});
