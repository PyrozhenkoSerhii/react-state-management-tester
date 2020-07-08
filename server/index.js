/* eslint-disable no-console */

import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path";
import mongoose from "mongoose";
import config from "config";

import blogs from "./blogs/controller";


const app = express();
const port = config.get("api.port") || 80;
const host = config.get("api.host") || "localhost";


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
mongoose.set("debug", (coll, method) => {
  console.log(`[Mongoose] Path: /${coll}, method: ${method}`);
});

app.use("/api/", blogs);

app.listen(port, host, (err) => {
  if (err) {
    console.log("Error while launching the server");
  } else {
    console.log(`Server is running on port ${port}`);
  }
});
