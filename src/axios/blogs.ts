import { instance } from "./api";
import { IBlog } from "../interfaces/Blog";


export const fetchBlogList = async (): Promise<Array<IBlog>> => {
  try {
    const response = await instance.get<Array<IBlog>>("/blogs");

    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};
