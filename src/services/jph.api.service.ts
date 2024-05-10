import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: { "Content-Type": "application/json; charset=UTF-8" },
});

export const getAllPosts = () => {
  return axiosInstance.get("/posts");
};
