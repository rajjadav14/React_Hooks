import React, { Component, startTransition } from "react";

export class ClassTrans extends Component {
  state = {
    text: "",
    list: [],
  };

  listSize = 10000;

  handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ text: e.target.value });

    // const l: string[] = [];
    // for (let i = 0; i < this.listSize; i++) {
    //   l.push(e.target.value);
    // }
    // this.setState({ list: l });

    startTransition(() => {
      const l: string[] = [];
      for (let i = 0; i < this.listSize; i++) {
        l.push(e.target.value);
      }
      this.setState({ list: l });
    });
  };

  render() {
    return (
      <>
        <h1>Transition in class component</h1>
        <input
          type="text"
          value={this.state.text}
          onChange={this.handleTextChange}
        />
        {this.state.list.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </>
    );
  }
}

export default ClassTrans;
