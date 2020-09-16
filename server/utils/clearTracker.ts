import "./database";
import { connection, STATES } from "mongoose";

import { TrackerModel } from "../tracker/model";

const clear = async () => {
  if (connection.readyState !== STATES.connected && connection.readyState !== STATES.connecting) {
    return;
  }

  await TrackerModel.deleteMany({});

  process.exit();
};

clear();
