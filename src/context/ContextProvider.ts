import { createContext, useContext } from "react";
import { IPostModel } from "../models/IPostModel";
import { IUserModel } from "../models/IUserModel";

type StoreType = {
  usersStore: {
    allUsers: IUserModel[];
    setFavoriteUser: (obj: IUserModel) => void;
  };
  postsStore: { allPosts: IPostModel[] };
};

export const defaultValue: StoreType = {
  usersStore: {
    allUsers: [],
    setFavoriteUser: (obj: IUserModel) => {
      console.log(obj);
    },
  },
  postsStore: { allPosts: [] },
};
export const Context = createContext<StoreType>(defaultValue);

export const useContextProvider = (): StoreType => {
  return useContext(Context);
};
