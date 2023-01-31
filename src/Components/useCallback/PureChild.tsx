import React, { useMemo } from "react";
interface props {
  count: number;
  addcount: Function;
}

function PureChild({ count, addcount }: props) {
  const callingCostlyApi = useMemo(() => {
    let i = -1000;
    while (i < 900000000) i++;
  }, []);
  const data = callingCostlyApi;
  //const data = callingCostlyApi;
  console.log("child component rendered");
  return (
    <>
      <h2>Child</h2>
      <h4>counter = {count}</h4>
      <button onClick={() => addcount(count)}>ADD</button>
      {/* <button onClick={() => set(count - 1)}>SUB</button> */}
    </>
  );
}

export default React.memo(PureChild);
