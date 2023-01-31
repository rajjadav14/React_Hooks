import withCounter from "./withCounter";

interface IProps {
  count: number;
  increment: () => void;
}

const HoverCounter = ({ count, increment }: IProps) => {
  return (
    <div>
      <h2>Hover Count = {count}</h2>
      <button onMouseOver={increment}>Click</button>
    </div>
  );
};

export default withCounter(HoverCounter);
