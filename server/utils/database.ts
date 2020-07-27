import * as mongoose from "mongoose";
import * as config from "config";

import { logger } from "./logger";

mongoose.connect(config.get("db.connectionString"), config.get("db.options")).then(
  () => logger.info(`[API] Connection to ${config.get("db.databaseName")} db was established `),
  (err) => logger.info(`[API] Error occured while connection to ${config.get("db.databaseName")} db: `, err),
);

mongoose.set("debug", (coll: string, method: string) => {
  logger.info(`[Mongoose] Path: /${coll}, method: ${method}`);
});
