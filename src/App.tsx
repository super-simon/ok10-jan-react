import { useEffect, useState } from "react";

const App = () => {
  const [counter, setCounter] = useState<number>(0);

  const [x, setX] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCounter(counter + 1);
    }, 2000);
    return () => {
      console.log("...useEffect return cb");
      clearInterval(id);
    };
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
