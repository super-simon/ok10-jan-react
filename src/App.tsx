import { create } from "zustand";
import MainComponent from "./components/MainComponent";

type Store = {
  count: number;
  inc: () => void;
  dec: () => void;
};

export const useStore = create<Store>((set) => ({
  count: 10,
  inc: () => set((state) => ({ count: state.count + 1 })),
  dec: () => set((state) => ({ count: state.count - 1 })),
}));

const App = () => {
  return (
    <div>
      <MainComponent />
    </div>
  );
};

export default App;
