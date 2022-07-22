// import React from "react";

// const UseRef = () => {
//   const [name, setName] = React.useState("");
//   const inputRef = React.useRef(null);
//   const prevNameRef = React.useRef("");

//   React.useEffect(() => {
//     prevNameRef.current = name;
//   }, [name]);

//   const handleChange = (e) => {
//     setName(e.target.value);
//   };

//   return (
//     <>
//       <h1>
//         My name is {name} and was {prevNameRef.current}
//       </h1>
//       <input ref={inputRef} value={name} onChange={handleChange} />
//       <button onClick={() => inputRef.current.focus()}>Focus</button>
//     </>
//   );
// };

// export default UseRef;

import { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom/client";

export default function UseRef() {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
  });

  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    </>
  );
}
