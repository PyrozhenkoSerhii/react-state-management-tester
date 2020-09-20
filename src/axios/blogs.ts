import { stringify } from "query-string";

import { instance } from "./api";
import { IBlog } from "../interfaces/Blog";
import { API } from "../../shared/api";
import { GetBlogsQuery } from "../../server/blogs/controller";

export const fetchBlogList = async (query: GetBlogsQuery): Promise<Array<IBlog>> => {
  const stringified = stringify(query);

  try {
    const response = await instance.get<Array<IBlog>>(`${API.BLOGS}?${stringified}`);

    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};
