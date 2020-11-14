import { stringify } from "query-string";
import { instance } from "./api";
import {
  ProfilerRequest,
  GetProfilerQuery,
} from "../../shared/interfaces";
import { API } from "../../shared/api";

import { IProfiler } from "../../server/profiler/model";

export const sendProfilerInfo = async (request: ProfilerRequest): Promise<boolean> => {
  try {
    await instance.post(API.PROFILER, request);
    return true;
  } catch (err) {
    throw new Error(err);
  }
};

export const getProfilerInfo = async (
  query: GetProfilerQuery,
): Promise<Array<IProfiler>> => {
  const stringified = stringify(query);

  try {
    const response = await instance.get<Array<IProfiler>>(`${API.PROFILER}?${stringified}`);
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};
