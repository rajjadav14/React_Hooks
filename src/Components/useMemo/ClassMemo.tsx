import React, { Component } from "react";

class ClassMemo extends Component<any, any> {
  state = {
    countOne: 0,
    countTwo: 0,
    even: false,
  };

  isEven = () => {
    console.log("isEven function called");
    return this.state.countOne % 2 === 0;
  };
    componentDidUpdate(prepops: any, prestate: any) {
      if (this.state.countOne != prestate.countOne) {
        this.setState({ even: this.isEven() }, () => console.log(this.state));
      }
    }
  render() {
    return (
      <>
        ClassMemo
        <h4>Counter One :- {this.state.countOne}</h4>
        <button
          onClick={() =>
            this.setState({
              countOne: this.state.countOne + 1,
            })
          }
        >
          Increment counter one
        </button>
        {/* <h1>COunter 1 is evena = {this.state.even ? "true" : "false"}</h1> */}
        <h1>COunter 1 is evena = {this.isEven() ? "true" : "false"}</h1>
        <h4>Counter two :- {this.state.countTwo}</h4>
        <button
          onClick={() => this.setState({ countTwo: this.state.countTwo + 1 })}
        >
          Increment counter two
        </button>
      </>
    );
  }
}

export default ClassMemo;
