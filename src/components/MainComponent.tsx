import { useStore } from "../App";
import Decrementor from "./Decrementor";
import Incrementor from "./Incrementor";

const MainComponent = () => {
  const counter = useStore((state) => state.count);
  return (
    <div>
      MainComponent {counter}
      <Incrementor />
      <Decrementor />
    </div>
  );
};

export default MainComponent;
