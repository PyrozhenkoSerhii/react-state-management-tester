import { instance } from "./api";
import { IBlog } from "../interfaces/Blog";


const defaultError = "Unknown error on the server";

export const blogsAPI = {
  fetchBlogList: async (): Promise<Array<IBlog>> => {
    try {
      const response = await instance.get<Array<IBlog>>("/blogs/list");
      return response.data;
    } catch (error) {
      return error?.message || defaultError;
    }
  },
  deleteBlog: async (id: number | string): Promise<string> => {
    try {
      await instance.delete(`/blogs?id=${id}`);
      return "";
    } catch (error) {
      return error?.message || defaultError;
    }
  },
};
