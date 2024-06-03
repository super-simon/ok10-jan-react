import { useStore } from "../App";

const Decrementor = () => {
  const dec = useStore((state) => state.dec);
  return (
    <div>
      <button onClick={dec}>Decrement</button>
    </div>
  );
};

export default Decrementor;
