import React, { useEffect, useRef, useState } from "react";

function FunctionalRefs() {
  const [name, setName] = useState("");
  const count = useRef(0);
  const focus = useRef<any>(null);
  const Prename = useRef<any>("");
  const handleClick = (e: any) => {
    focus!.current!.focus();
  };

  useEffect(() => {
    count.current++;
  });

  useEffect(() => {
    Prename!.current = name;
  }, [name]);
  return (
    <>
      <div>FunctionalRefs</div>
      <input
        type="text"
        ref={focus}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <h4>Page rerendered times:- {count.current}</h4>
      <button onClick={handleClick}>SET FOCUS</button>
      <h4>
        my name is {name} and used to be {Prename.current}
      </h4>
    </>
  );
}

export default FunctionalRefs;
