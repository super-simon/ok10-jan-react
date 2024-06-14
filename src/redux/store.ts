import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { postSlice } from "./slices/postSlice";
import { userSlice } from "./slices/userSlice";

export const store = configureStore({
  reducer: { userSlice: userSlice.reducer, postSlice: postSlice.reducer },
});

export const useAppDispatch = useDispatch.withTypes<typeof store.dispatch>();
export const useAppSelector =
  useSelector.withTypes<ReturnType<typeof store.getState>>();
