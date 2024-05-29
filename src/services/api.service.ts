import axios, { AxiosError } from "axios";
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
    let response;
    try {
      response = await axiosInstance.post<ITokenObtainPair>("/auth", authData);
      localStorage.setItem("tokenPair", JSON.stringify(response.data));
    } catch (e) {
      console.log(e);
    }
    return !!(response?.data?.access && response?.data?.refresh);
  },

  refresh: async (refreshToken: string) => {
    const response = await axiosInstance.post<ITokenObtainPair>(
      "/auth/refresh",
      {
        refresh: refreshToken,
      }
    );

    localStorage.setItem("tokenPair", JSON.stringify(response.data));
  },

  logout: () => {
    localStorage.removeItem("tokenPair");
  },
};

export const carService = {
  getCars: async () => {
    try {
      const response = await axiosInstance.get<ICarPaginatedModel>("/cars");
      return response.data;
    } catch (e) {
      const axiosError = e as AxiosError;
      if (axiosError.response?.status === 401) {
        const refreshToken =
          retrieveLocalStorageData<ITokenObtainPair>("tokenPair").refresh;
        await authService.refresh(refreshToken);
        await carService.getCars();
      }
    }
  },
};
