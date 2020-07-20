import { instance } from "./api";
import { IAxiosResponse } from "../interfaces/AxiosResponse";
import { IBlog } from "../interfaces/Blog";

const defaultError = "Unknown error on the server";

export const blogsAPI = {
  fetchBlogList: async (): Promise<IAxiosResponse<Array<IBlog>>> => {
    try {
      const response = await instance.get<Array<IBlog>>("/blogs/list");
      return {
        data: response.data,
        error: null,
      };
    } catch (error) {
      return {
        data: null,
        error: error.message || defaultError,
      };
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
