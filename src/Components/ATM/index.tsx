import React, { useState } from "react";

function ATM() {
  const [amount, setAmount] = useState(0);
  const [res, setRes] = useState("");
  const notes: any = {
    "100": 10,
    "500": 10,
    "2000": 5,
    "200": 5,
  };

  const handleSubmit = () => {
    const notesArray = Object.keys(notes)
      .map((ele) => Number(ele))
      .sort((a: any, b: any) => b - a);

    let money = amount;
    let res = "";
    notesArray.forEach((ele) => {
      console.log(money, ele);
      if (money >= ele) {
        const q = Math.floor(money / ele);
        console.log(q);
        if (q && q <= notes[`${ele}`]) {
          money -= ele * q;
          notes[`${ele}`] -= q;
          console.log(q);
          res += ` ${q} ${ele}  notes`;
        } else if (q) {
          money -= ele * notes[`${ele}`];
          notes[`${ele}`] = 0;
          res += ` ${notes[`${ele}`]} ${ele} notes +`;
        }
      }
    });

    setRes(res);
  };
  return (
    <>
      <h1>ATM</h1>
      <input value={amount} onChange={(e: any) => setAmount(e.target.value)} />
      <button onClick={handleSubmit}>Calculate</button>
      <h2>{res}</h2>
    </>
  );
}

export default ATM;
