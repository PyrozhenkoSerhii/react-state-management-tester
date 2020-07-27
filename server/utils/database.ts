/* eslint-disable no-console */

import * as mongoose from "mongoose";
import * as config from "config";

mongoose.connect(config.get("db.connectionString"), config.get("db.options")).then(
  () => console.log(`[API] Connection to ${config.get("db.databaseName")} db was established `),
  (err) => console.log(`[API] Error occured while connection to ${config.get("db.databaseName")} db: `, err),
);

mongoose.set("debug", (coll: string, method: string) => {
  console.log(`[Mongoose] Path: /${coll}, method: ${method}`);
});
