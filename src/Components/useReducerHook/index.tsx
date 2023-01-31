import { useReducer } from "react";
import "./index.css";

interface IState {
  count: number;
}

enum ActionTypes {
  ADD = "Add",
  SUB = "Sub",
}

interface IAction {
  type: ActionTypes;
  payload?: number;
}

const initalize = { count: 0 };

function reducer(state: IState, action: IAction): IState {
  switch (action.type) {
    case ActionTypes.ADD:
      return { count: state.count + 1 };
    case ActionTypes.SUB:
      return { count: state.count - 1 };
    default:
      return { count: state.count };
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initalize);
  return (
    <>
      <div className="mytext">Count: {state.count}</div>
      <button onClick={() => dispatch({ type: ActionTypes.SUB })}>-</button>
      <button onClick={() => dispatch({ type: ActionTypes.ADD })}>+</button>
    </>
  );
}

export default Counter;
