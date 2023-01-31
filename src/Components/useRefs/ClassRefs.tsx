import React, { PureComponent } from "react";

export default class ClassRefs extends PureComponent {
  myref: React.RefObject<any>;
  constructor(prop: any) {
    super(prop);
    this.myref = React.createRef();
  }
  render() {
    return (
      <>
        <h4>ClassRefs</h4>
        <input ref={this.myref} />
        <button
          onClick={(e) => {
            this.myref.current.focus();
          }}
        >
          FOcus
        </button>
      </>
    );
  }
}
