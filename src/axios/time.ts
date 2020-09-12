import { instance } from "./api";
import { TimeTrackingPOSTRequest } from "../../shared/interfaces";


export const createTimeStamp = async (request: TimeTrackingPOSTRequest): Promise<boolean> => {
  try {
    const response = await instance.post("/tracking", request);

    return response.status === 202 || response.status === 201;
  } catch (err) {
    throw new Error(err);
  }
};
