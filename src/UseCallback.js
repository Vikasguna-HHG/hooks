import React, { useCallback, useState } from "react";
import Child from "./Child";
// function return
export default function UseCallback() {
  const [count, setCount] = useState(0);
  const [count1, setCount1] = useState(10);

  const callback = useCallback(() => {
    console.log("welcome");
  }, [count1]);
  return (
    <div>
      <h1>{count}</h1>
      <h1>{count1}</h1>
      <Child callback={callback} />
      <button onClick={() => setCount(count + 1)}>click</button>
      <button onClick={() => setCount1(count1 + 1)}>click 1</button>
    </div>
  );
}
