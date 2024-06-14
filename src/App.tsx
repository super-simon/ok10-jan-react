import { useState } from "react";
import {
  decrement,
  decrementBy,
  increment,
  incrementBy,
  reset,
} from "./redux/slices/slice1";
import { useAppDispatch, useAppSelector } from "./redux/store";

const App = () => {
  const [by, setBy] = useState(5);
  const { value } = useAppSelector((state) => state.slice1);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h2>{value}</h2>
      <button
        onClick={() => {
          dispatch(incrementBy(10));
        }}
      >
        Increment by 10
      </button>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch(decrementBy(10));
        }}
      >
        Decrement by 10
      </button>
      <button
        onClick={() => {
          dispatch(reset());
        }}
      >
        Reset
      </button>
      <br />
      <input
        type="number"
        onChange={(e) => setBy(+e.target.value)}
        value={by}
      />
      <br />
      <button
        onClick={() => {
          dispatch(incrementBy(by));
        }}
      >
        Increment By
      </button>
      <button
        onClick={() => {
          dispatch(decrementBy(by));
        }}
      >
        Decrement By
      </button>
    </div>
  );
};

export default App;
