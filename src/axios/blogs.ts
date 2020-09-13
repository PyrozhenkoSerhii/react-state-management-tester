import { instance } from "./api";
import { IBlog } from "../interfaces/Blog";

import { API } from "../../shared/api";

export const fetchBlogList = async (): Promise<Array<IBlog>> => {
  try {
    const response = await instance.get<Array<IBlog>>(API.BLOGS);

    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};
