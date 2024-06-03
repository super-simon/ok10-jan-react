import { useStore } from "../App";

const Incrementor = () => {
  const inc = useStore((state) => state.inc);
  return (
    <div>
      <button onClick={inc}>Increment</button>
    </div>
  );
};

export default Incrementor;
