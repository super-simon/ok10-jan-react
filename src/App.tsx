import { useEffect, useState } from "react";

const App = () => {
  const [counter, setCounter] = useState<number>(0);

  const [x, setX] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCounter(counter + 1);
    }, 2000);
  }, [x]);

  console.log(".");
  return (
    <div>
      <h2>{counter}</h2>
      <button
        onClick={() => {
          setX((val) => val + 1);
        }}
      ></button>
    </div>
  );
};

export default App;
