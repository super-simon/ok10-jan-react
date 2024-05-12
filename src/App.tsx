import { useState } from "react";

interface IState {
  value: number;
}

const App = () => {
  const [counter, setCounter] = useState<IState>({ value: 0 });

  const reset = () => {
    setCounter({ value: 0 });
  };

  const increment = () => {
    setCounter((val) => ({ value: val.value + 1 }));
  };

  const decrement = () => {
    setCounter((val) => ({ value: val.value - 1 }));
  };
  return (
    <div>
      <h2>{counter.value}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default App;
