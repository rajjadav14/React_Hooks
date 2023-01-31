import React, { useEffect, useLayoutEffect, useRef, useState } from "react";

//not visible change

export default function Index() {
  const [show, setShow] = useState(false);
  const popup = useRef<any>();
  const button = useRef<any>();

  useLayoutEffect(() => {
    console.log("start");
    setTimeout(() => {
      console.log("in timeout");
    }, 3000);

    if (popup.current == null || button.current == null) return;
    const { bottom } = button.current.getBoundingClientRect();
    popup.current.style.top = `${bottom + 40}px`;
    console.log("end");
  }, [show]);

  return (
    <div>
     <button ref={button} onClick={()=>setShow(!show)}>
      CLick me
     </button>
     {show && (
      <div style={{position:"absolute"}} ref= {popup}>
        This is popup
      </div>
     )}
    </div>
  );
}
