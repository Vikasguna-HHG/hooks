import React, { memo } from "react";

function Child({ callback }) {
  console.log("hello");
  return <></>;
}
export default memo(Child);
