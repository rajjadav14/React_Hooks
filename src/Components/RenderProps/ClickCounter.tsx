import React from "react";

interface IProps {
  count: number;
  incrementCount: () => void;
}
export default function ClickCounter({ count, incrementCount }: IProps) {
  return (
    <>
      <h2>ClickCounteraaa</h2>
      <h3>Click counts= {count}</h3>
      <button onClick={incrementCount}>Click Me</button>
    </>
  );
}
