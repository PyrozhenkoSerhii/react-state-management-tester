/* eslint-disable no-console */

import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as path from "path";
import * as config from "config";
import "./utils/database";

import { blogsRouter } from "./blogs/controller";
import { errorHandler } from "./middleware/errorHandler";

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

app.use("/api/blogs", blogsRouter);
app.use(errorHandler);


app.listen(port, host, (err) => {
  if (err) {
    console.log("Error while launching the server");
  } else {
    console.log(`Server is running on port ${port}`);
  }
});
