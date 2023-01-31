import React from "react";
import { useGetTime } from "./useGetTime";

export default function Index() {
  const [time] = useGetTime();
  return (
    <>
      <h1>Current Time: - {time} </h1>
    </>
  );
}
