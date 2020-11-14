import { mean } from "lodash";
import { ProfilerItem, TrackerSources } from "../../../shared/interfaces";
import { sendProfilerInfo } from "../../axios/profiler";

export const shortenText = (text: string, max = 250): string => (text.length > max ? `${text.substring(0, max)}...` : text);

const defaultTimeMap: ProfilerItem = {
  avg: null,
  count: 0,
  max: null,
  min: Number.MAX_VALUE,
  times: [],
};

let timeMap = JSON.parse(JSON.stringify(defaultTimeMap)) as ProfilerItem;
let timer: number = null;

export const renderCallback = (source: TrackerSources) => (
  id: string, phase: string, actualTime: number, baseTime: number,
): void => {
  const fullTime = baseTime + actualTime;
  timeMap.count += 1;
  timeMap.times.push(fullTime);
  timeMap.max = timeMap.max > fullTime ? timeMap.max : fullTime;
  timeMap.min = timeMap.min < fullTime ? timeMap.min : fullTime;

  if (timer) {
    clearTimeout(timer);
  }
  timer = setTimeout(() => {
    timeMap.avg = +mean(timeMap.times).toFixed(2);

    console.log(timeMap);
    sendProfilerInfo({
      avg: timeMap.avg,
      min: timeMap.min,
      max: timeMap.max,
      count: timeMap.count,
      source,
    });

    timeMap = JSON.parse(JSON.stringify(defaultTimeMap)) as ProfilerItem;
  }, 400);
};
