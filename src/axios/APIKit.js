/* eslint-disable no-param-reassign */

import axios, { AxiosRequestConfig } from "axios";

import { TBlog } from "../types/blog";

const APIKit = axios.create({
  baseURL: `${process.env.HOST}:${process.env.PORT}/api` || "localhost:8080/api",
  timeout: 5000,
});


export const setClientToken = (token: string): AxiosRequestConfig => {
  APIKit.interceptors.request.use((config) => {
    config.headers.Authorization = `Baarer ${token}`;
    return config;
  });
};

export const getBlogsList = async (): Array<TBlog> => {
  const blogs = await APIKit.get("/blogs/list");
  return blogs;
};


export default APIKit;
