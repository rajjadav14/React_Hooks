import React, { Component, PureComponent } from "react";

interface Iprops {
  count: number;
}
export default class CLassChild extends Component<Iprops, any> {
  constructor(props: any) {
    super(props);
    console.log('child class constructor called');
  }
  render() {
    console.log("child class rerendered");
    return <div>CLassChild {this.props.count}</div>;
  }
}
