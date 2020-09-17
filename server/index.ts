import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as path from "path";
import * as config from "config";

import "./utils/database";
import { logger } from "./utils/logger";
import { errorHandler } from "./middleware/errorHandler";

import { blogsRouter } from "./blogs/controller";
import { trackerRouter } from "./tracker/controller";

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

app.get("/presentation", (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/public/presentation", "index.html"));
});

app.use("/api", blogsRouter);
app.use("/api", trackerRouter);

app.use(errorHandler);

app.listen(port, host, (err) => {
  if (err) {
    logger.info("[API] Error while launching the server");
  } else {
    logger.info(`[API] Server is running on port ${port}`);
  }
});
