import withCounter from "./withCounter";

interface IProps {
  count: number;
  increment: () => void;
}

const ClickCounter = ({ count, increment }: IProps) => {
  return (
    <div>
      <h2>CLick Count = {count}</h2>
      <button onClick={increment}>Click</button>
    </div>
  );
};

export default withCounter(ClickCounter);
