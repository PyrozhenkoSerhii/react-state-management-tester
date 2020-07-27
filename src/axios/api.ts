import axios from "axios";

export const instance = axios.create({
  baseURL: `http://${process.env.HOST}:${process.env.PORT}/api` || "localhost:8080/api",
});
