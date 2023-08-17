import React, { useState } from "react";
import Child from "./Child";

export const Parent = () => {
  const [input, setInput] = useState("");
  const [ob, setOb] = useState({});
  const handleClick = (e: any) => {
    setInput(e.target.value);
    const op = { name: e.target.value, id: e.target.value };
    setOb(op);
  };

  return (
    <>
      <h1>useDefferedValue</h1>
      <h3>Parent input box</h3>
      <input type="text" value={input} onChange={handleClick} />
      <Child ob={ob} />
    </>
  );
};

export default Parent;
