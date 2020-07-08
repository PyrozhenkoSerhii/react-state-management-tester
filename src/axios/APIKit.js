/* eslint-disable no-param-reassign */

import axios from "axios";

const APIKit = axios.create({
  baseURL: `${process.env.HOST}:${process.env.PORT}` || "localhost:8080",
  timeout: 5000,
});


export const setClientToken = (token) => {
  APIKit.interceptors.request.use((config) => {
    config.headers.Authorization = `Baarer ${token}`;
    return config;
  });
};


export default APIKit;
