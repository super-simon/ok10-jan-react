import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type CounterStateType = {
  value: number;
};

const initialState: CounterStateType = { value: 0 };

export const counter1Slice = createSlice({
  name: "counter1",
  initialState,
  reducers: {
    increment: (state) => {
      state.value = state.value + 1;
    },
    incrementBy: (state, action: PayloadAction<number>) => {
      state.value = state.value + action.payload;
    },
    decrement: (state) => {
      state.value = state.value - 1;
    },
    decrementBy: (state, action: PayloadAction<number>) => {
      state.value = state.value - action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const { increment, incrementBy, decrement, decrementBy, reset } =
  counter1Slice.actions;
