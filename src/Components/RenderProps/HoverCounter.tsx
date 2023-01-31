import React from "react";

interface IProps {
  count: number;
  incrementCount: () => void;
}
export default function HoverCounter({ count, incrementCount }: IProps) {
  return (
    <>
      <h2>HoverCounter</h2>
      <h3>Click counts= {count}</h3>
      <button onMouseOver={incrementCount}>Click Me</button>
    </>
  );
}
