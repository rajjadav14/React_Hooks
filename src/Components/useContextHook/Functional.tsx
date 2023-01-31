import React, { useContext } from "react";
import { UserContext } from "./index";

export default function Functional() {
  // const userdata = useContext(UserContext);
  return (
    // <h4>
    //   functional componet data = {userdata?.name}
    //   {userdata?.email} {userdata?.age}
    // </h4>
    <UserContext.Consumer>
      {(userdata) => {
        return (
          <h4>
            functional componet data = {userdata?.name}
            {userdata?.email} {userdata?.age}
          </h4>
        );
      }}
    </UserContext.Consumer>
  );
}
