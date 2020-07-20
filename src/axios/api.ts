import axios from "axios";

const instance = axios.create({
  baseURL: `http://${process.env.HOST}:${process.env.PORT}/api` || "localhost:8080/api",
});


// instance.interceptors.response.use(
//   (response) => response.data,
//   (error) => {
//     console.log(error);
//     return Promise.reject(error);
//   },
// );

export { instance };
