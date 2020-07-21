/* eslint-disable no-console */

import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as path from "path";
import * as mongoose from "mongoose";
import * as config from "config";

import { blogsRouter } from "./blogs/controller";


const app: express.Application = express();
const port: number = config.get("api.port") || 8080;
const host: string = config.get("api.host") || "localhost";


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "../dist")));
app.get("/redux/v1", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/public/redux/v1", "index.html"));
});

app.get("/redux/v2", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/public/redux/v2", "index.html"));
});

app.get("/mobx/v1", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/public/mobx/v1", "index.html"));
});

app.get("/context/v1", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/public/context/v1", "index.html"));
});

mongoose.connect(config.get("db.connectionString"), config.get("db.options")).then(
  () => console.log(`[API] Connection to ${config.get("db.databaseName")} db was established `),
  (err) => console.log(`[API] Error occured while connection to ${config.get("db.databaseName")} db: `, err),
);
mongoose.set("useCreateIndex", true);
mongoose.set("debug", (coll: string, method: string) => {
  console.log(`[Mongoose] Path: /${coll}, method: ${method}`);
});

app.use("/api/blogs", blogsRouter);

app.listen(port, host, (err) => {
  if (err) {
    console.log("Error while launching the server");
  } else {
    console.log(`Server is running on port ${port}`);
  }
});
