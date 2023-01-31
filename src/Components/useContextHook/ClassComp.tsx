import React, { Component } from "react";
import { UserContext } from "./index";

export class ClassComp extends Component {
  render() {
    return (
      <UserContext.Consumer>
        {(userdata) => {
          return (
            <h4>
              class component data = {userdata?.name} , 
              {userdata?.email} ,  {userdata?.age}
            </h4>
          );
        }}
      </UserContext.Consumer>
    );
  }
}

export default ClassComp;
