import axios, { AxiosResponse } from "axios";
import { IPostModel } from "../models/PostModel";
import { IUserModel } from "../models/UserModel";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {},
});

const userApiSerivce = {
  getAllUsers: async (): Promise<AxiosResponse<IUserModel[]>> => {
    return axiosInstance.get("/users");
  },

  getUserByUserId: async (
    userId: number
  ): Promise<AxiosResponse<IUserModel>> => {
    return await axiosInstance.get(`/users/${userId}`);
  },

  getPostsByUser: async (
    userId: string
  ): Promise<AxiosResponse<IPostModel[]>> => {
    return axiosInstance.get(`/users/${userId}/posts`);
  },
};

export { userApiSerivce };
