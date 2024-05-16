import axios, { AxiosResponse } from "axios";
import { IPostModel } from "../models/PostModel";
import { IUserModel } from "../models/UserModel";

const axiosInstance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com/",
  headers: {},
});

const userApiSerivce = {
  getAllUsers: (): Promise<AxiosResponse<IUserModel[]>> => {
    return axiosInstance.get("/users");
  },

  getUserByUserId: async (
    userId: number
  ): Promise<AxiosResponse<IUserModel>> => {
    return await axiosInstance.get(`/users/${userId}`);
  },

  getAllPosts: (): Promise<AxiosResponse<IPostModel[]>> => {
    return axiosInstance.get("/posts");
  },
};

export { userApiSerivce };
