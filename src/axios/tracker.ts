import { instance } from "./api";
import { TrackerRequest } from "../../shared/interfaces";


export const sendTrackerInfo = async (request: TrackerRequest): Promise<boolean> => {
  try {
    await instance.post("/tracker", request);

    return true;
  } catch (err) {
    throw new Error(err);
  }
};
