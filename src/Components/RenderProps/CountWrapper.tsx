import { PureComponent } from "react";

interface Istate {
  count: number;
}

interface Iprops {
  render: any;
}

export default class CountWrapper extends PureComponent<Iprops, Istate> {
  state = {
    count: 0,
  };

  incrementCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return <>{this.props.render(this.state.count, this.incrementCount)}</>;
  }
}
