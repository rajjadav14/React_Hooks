import React, { useCallback, useState } from "react";
import PureChild from "./PureChild";
import "./index.css";

function Index() {
  const [counter, setCounter] = useState(0);
  const [parentCount, setParentCount] = useState(0);
  console.log("functional parent rendered");
  const addCount = useCallback((): void => setCounter(counter + 1), [counter]);

  return (
    <>
      <p>index is parent</p>
      <h4>counter = {parentCount}</h4>
      <button onClick={() => setParentCount(parentCount + 1)}>ADD</button>
      <button onClick={() => setParentCount(parentCount - 1)}>SUB</button>
      <p>end parent</p>
      <PureChild count={counter} addcount={addCount} />
    </>
  );
}

export default Index;
