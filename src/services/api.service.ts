import axios from "axios";
import { AuthDataModel } from "../models/AuthDataModel";
import { ICarPaginatedModel } from "../models/ICarPaginatedModel";
import { ITokenObtainPair } from "../models/ITokenObtainPair";
import { retrieveLocalStorageData } from "./helpers/helpers";

const axiosInstance = axios.create({
  baseURL: "http://owu.linkpc.net/carsAPI/v2",
  headers: {},
});

axiosInstance.interceptors.request.use((request) => {
  if (
    localStorage.getItem("tokenPair") &&
    request.url != "/auth" &&
    request.url != "/auth/refresh"
  ) {
    request.headers.set(
      "Authorization",
      "Bearer " + retrieveLocalStorageData<ITokenObtainPair>("tokenPair").access
    );
  }
  return request;
});

export const authService = {
  authentication: async (authData: AuthDataModel): Promise<boolean> => {
    const response = await axiosInstance.post<ITokenObtainPair>(
      "/auth",
      authData
    );
    localStorage.setItem("tokenPair", JSON.stringify(response.data));
    return !!(response?.data?.access && response?.data?.refresh);
  },

  refresh: async () => {
    const refreshToken =
      retrieveLocalStorageData<ITokenObtainPair>("tokenPair").refresh;
    const response = await axiosInstance.post<ITokenObtainPair>(
      "/auth/refresh",
      { refresh: refreshToken }
    );

    localStorage.setItem("tokenPair", JSON.stringify(response.data));
  },

  logout: () => {
    localStorage.removeItem("tokenPair");
  },
};

export const carService = {
  getCars: async (page: string = "1") => {
    const response = await axiosInstance.get<ICarPaginatedModel>("/cars", {
      params: { page },
    });
    return response.data;
  },
};
