import React, { Component } from "react";
import { UserContext } from "./index";

export default class ClassComp2 extends Component {
  static contextType = UserContext;
  declare context: React.ContextType<typeof UserContext>;
  componentDidMount() {}
  render() {
    const { name, age, email } = this.context!;
    return (
      <h4>
        ClassComp2 method 2 data ={name} , {email}, {age}{" "}
      </h4>
    );
  }
}
