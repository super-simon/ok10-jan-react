import { createContext, useContext } from "react";
import { IPostModel } from "../models/IPostModel";
import { IUserModel } from "../models/IUserModel";

type StoreType = {
  usersStore: { allUsers: IUserModel[] };
  postsStore: { allPosts: IPostModel[] };
};

export const defaultValue: StoreType = {
  usersStore: { allUsers: [] },
  postsStore: { allPosts: [] },
};
export const Context = createContext<StoreType>(defaultValue);

export const useContextProvider = (): StoreType => {
  return useContext(Context);
};
