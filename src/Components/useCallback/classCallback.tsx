import React, { Component, PureComponent } from "react";
import CLassChild from "./CLassChild";
import PureChild from "./PureChild";

class ClassCallback extends PureComponent {
  state = {
    counter: 0,
    parentCounter: 0,
  };

  parentCount = (operation: string) => {
    this.setState({
      parentCounter:
        operation == "+"
          ? this.state.parentCounter + 1
          : this.state.parentCounter - 1,
    });
  };

  componentDidMount() {
    console.log("parent rerender");
  }

  childCounter = () => {
    this.setState({
      counter: this.state.counter + 1,
    });
  };

  mycounter = this.childCounter;

  render() {
    console.log("parent undated");
    return (
      <>
        <div>class counter</div>
        <h4>counter = {this.state.parentCounter}</h4>
        <button onClick={() => this.parentCount("+")}>ADD</button>
        <button onClick={() => this.parentCount("-")}>SUB</button>
        <p>end parent</p>
        <PureChild count={this.state.counter} addcount={this.mycounter} />
        {/* <CLassChild count={this.state.counter} /> */}
      </>
    );
  }
}

export default ClassCallback;
