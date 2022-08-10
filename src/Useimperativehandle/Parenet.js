import React, { useRef } from "react";
import Child from "./Child";

function Parenet() {
  const ref = useRef();
  return (
    <div>
      <Child ref={ref} />
      <button onClick={() => ref.current.data()}>Parenet click</button>
    </div>
  );
}

export default Parenet;
