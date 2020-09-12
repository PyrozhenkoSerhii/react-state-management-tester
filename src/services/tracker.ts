import { createContext } from "react";
import { observable, action } from "mobx";

import { TrackerTimestamp } from "../../shared/interfaces";
import { sendTrackerInfo } from "../axios/tracker";

const searchTimeStamp = (x: TrackerTimestamp, y: TrackerTimestamp) => x.source === y.source && x.action === y.action && x.position === y.position && x.state === "started";

class TrackerServiceClass {
  @observable timestamps: Array<TrackerTimestamp> = [];

  @action setTimeStamps = (timestamp: TrackerTimestamp) => {
    console.log(timestamp);
    console.log(this.timestamps);
    const index = this.timestamps.findIndex((x) => searchTimeStamp(x, timestamp));

    const started = this.timestamps[index];

    if (!started) {
      this.timestamps.push(timestamp);
      console.log("none");
      return;
    }


    sendTrackerInfo({
      action: started.action,
      position: started.position,
      source: started.source,
      title: started.title,
      time: timestamp.timestamp - started.timestamp,
    });

    console.log(started, index);
    this.timestamps.splice(index, 1);
  }
}

export const TrackerService = new TrackerServiceClass();

export const TrackerServiceContext = createContext(TrackerServiceClass);
