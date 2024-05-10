import { FC, memo, useCallback, useMemo, useState } from "react";

const A: FC<any> = memo(({ foobar }) => {
  console.log("A render");
  foobar();
  return <>Hello!</>;
});

const App = () => {
  console.log("App render");
  const [counter, setCouner] = useState(0);
  const foobar = useCallback(() => {}, []);

  const arr = useMemo(() => {
    return [];
  }, []);

  return (
    <div>
      <A foobar={foobar} arr={arr} />
      <button onClick={() => setCouner(counter + 1)}> click me</button>
    </div>
  );
};

export default App;
