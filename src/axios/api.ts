/* eslint-disable no-param-reassign */

import axios, { AxiosResponse } from "axios";

import { IBlog } from "../interfaces/Blog";

const instance = axios.create({
  baseURL: `${process.env.HOST}:${process.env.PORT}/api` || "localhost:8080/api",
});

export const blogsAPI = {
  getBlogList: (): Promise<AxiosResponse<Array<IBlog>>> => instance.get("/blogs/list"),
};
