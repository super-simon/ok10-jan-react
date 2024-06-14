import axios from "axios";
import { baseURL, urls } from "../constants/urls";
import { IPost } from "../models/IPost";
import { IUser } from "../models/IUser";

const axiosInstance = axios.create({ baseURL });

export const userService = {
  getAll: async (): Promise<IUser[]> => {
    const res = await axiosInstance.get<IUser[]>(urls.users.base);
    return res.data;
  },

  getById: async (id: string | number): Promise<IUser> => {
    const res = await axiosInstance.get<IUser>(urls.users.byId(id));
    return res.data;
  },
};

export const postService = {
  getAll: async (): Promise<IPost[]> => {
    const res = await axiosInstance.get<IPost[]>(urls.posts.base);
    return res.data;
  },

  getById: async (id: string | number): Promise<IPost> => {
    const res = await axiosInstance.get<IPost>(urls.posts.byId(id));
    return res.data;
  },
};
