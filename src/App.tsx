import { memo, useState } from "react";

const A = memo(() => {
  console.log("A render");
  return <>Hello!</>;
});

const App = () => {
  console.log("App render");
  const [counter, setCouner] = useState(0);
  return (
    <div>
      <A />
      <button onClick={() => setCouner(counter + 1)}> click me</button>
    </div>
  );
};

export default App;
