import axios, { AxiosResponse } from "axios";
import { IRecipe } from "../models/recipe";

const axiosInstance = axios.create({
  baseURL: "https://dummyjson.com",
  headers: {
    "Content-Type": "application/json",
  },
});

const getAllRecipes = (): Promise<AxiosResponse<{ recipes: IRecipe[] }>> => {
  return axiosInstance.get("/recipes");
};

export { getAllRecipes };
