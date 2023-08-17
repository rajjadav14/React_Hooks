import React, { useState, useTransition } from "react";

function FunctionTransition() {
  const [text, setText] = useState("");
  const [list, setList] = useState<string[]>([]);
  const [pend, starttrans] = useTransition();
  const listSize = 10000;
  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    // problematic
    // const l: string[] = [];
    // for (let i = 0; i < listSize; i++) {
    //   l.push(e.target.value);
    // }
    // setList(l);

    // solution
    starttrans(() => {
      const l: string[] = [];
      for (let i = 0; i < listSize; i++) {
        l.push(e.target.value);
      }
      const res = Promise.resolve("arp");
      res.then((r) => {
        l.push(r);
        console.log(l);
      });
      setList(l);
    });
  };
  return (
    <>
      <h1>useTransition Hook</h1>
      <input type="text" value={text} onChange={handleTextChange} />
      {pend ? (
        <h3>...loading</h3>
      ) : (
        list.map((item, index) => {
          return <div key={index}>{item}</div>;
        })
      )}
    </>
  );
}

export default FunctionTransition;
