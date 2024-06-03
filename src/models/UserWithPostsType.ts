import { IPostModel } from "./IPostModel";

export type UserWithPostsType = {
  id: number;
  name: string;
  posts: IPostModel[];
};
