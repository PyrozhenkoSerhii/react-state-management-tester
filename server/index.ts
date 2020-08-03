import * as express from "express";
import * as bodyParser from "body-parser";
import * as cors from "cors";
import * as path from "path";
import * as config from "config";
import * as swaggerJsDoc from "swagger-jsdoc";
import * as swaggerUi from "swagger-ui-express";

import "./utils/database";
import { logger } from "./utils/logger";
import { blogsRouter } from "./blogs/controller";
import { errorHandler } from "./middleware/errorHandler";

const app: express.Application = express();
const port: number = config.get("api.port") || 8080;
const host: string = config.get("api.host") || "localhost";


const swaggerOptions: swaggerJsDoc.Options = {
  swaggerDefinition: {
    info: {
      title: "State Management Helper API",
      description: "API for state management helper application",
      version: "0.1",
    },
    servers: [{
      url: `http://${host}:${port}`,
    }],
    host: `${host}:${port}`,
  },
  apis: ["server/users/**/*.ts", "server/blogs/**/*.ts"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);


app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

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

app.use("/api", blogsRouter);

app.use(errorHandler);

app.listen(port, host, (err) => {
  if (err) {
    logger.info("[API] Error while launching the server");
  } else {
    logger.info(`[API] Server is running on port ${port}`);
  }
});
