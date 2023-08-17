import React, { useDeferredValue, useMemo } from "react";

function Child(ob: any) {
  const SIZE = 20000;
  const differInput = useDeferredValue(ob);

  const getList = useMemo(() => {
    console.log("in list");
    console.log(differInput.ob.name);
    const l = [];
    for (let i = 0; i < SIZE; i++) {
      l.push(<div key={i}>{differInput.ob.name}</div>);
    }
    return l;
  }, [differInput]);
  return (
    <>
      <h3>child list</h3>
      {getList}
    </>
  );
}

export default Child;
