import { stringify } from "query-string";
import { instance } from "./api";
import {
  MobxObservableActionOperation,
  ReduxOperation,
  ReduxSagaOperation,
  GetTrackerQuery,
} from "../../shared/interfaces";
import { API } from "../../shared/api";

import { ITracker, TrackerTime } from "../../server/tracker/model";

export const sendReduxOperationTrackerInfo = async (
  operation: ReduxOperation,
): Promise<boolean> => {
  try {
    await instance.post(API.TRACKER_REDUX, operation);
    return true;
  } catch (err) {
    throw new Error(err);
  }
};

export const sendReduxSagaOperationTrackerInfo = async (
  operation: ReduxSagaOperation,
): Promise<boolean> => {
  try {
    await instance.post(API.TRACKER_REDUX_SAGA, operation);
    return true;
  } catch (err) {
    throw new Error(err);
  }
};

export const sendMobxObservableActionOperationTrackerInfo = async (
  operation: MobxObservableActionOperation,
): Promise<boolean> => {
  try {
    await instance.post(API.TRACKER_MOBX, operation);
    return true;
  } catch (err) {
    throw new Error(err);
  }
};

export const getTrackers = async (
  query: GetTrackerQuery,
): Promise<Array<ITracker<TrackerTime>>> => {
  const stringified = stringify(query);

  try {
    const response = await instance.get<Array<ITracker<TrackerTime>>>(`${API.TRACKER}?${stringified}`);
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};
