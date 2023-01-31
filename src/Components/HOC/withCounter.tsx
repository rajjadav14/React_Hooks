import { PureComponent } from "react";

interface IState {
  count: number;
}

const withCounter = (MyComponent: any) => {
  return class EnhancedComponent extends PureComponent<any, IState> {
    constructor(props: any) {
      super(props);
      this.state = {
        count: 0,
      };
    }

    handleMouseEvent = () => {
      console.log("event called");
      this.setState({ count: this.state.count + 1 });
    };

    render() {
      return (
        <MyComponent
          count={this.state.count}
          increment={this.handleMouseEvent}
        />
      );
    }
  };
};

export default withCounter;
