import React, { useState, useMemo, useCallback } from "react";
// value return
export default function UseMemo() {
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);

  const usememodemo = useMemo(
    function demo() {
      console.warn("function");
      return count * 5;
    },
    [count]
  );

  return (
    <>
      <h2>Count - {count}</h2>
      <h2>Item - {item}</h2>
      <h2>{usememodemo}</h2>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Count
      </button>

      <button
        onClick={() => {
          setItem(item * 2);
        }}
      >
        item
      </button>
    </>
  );
}
