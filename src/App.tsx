import UseContext from "./Components/useContextHook";
import UseReducer from "./Components/useReducerHook";
import UseCallback from "./Components/useCallback";
import ClassCallback from "./Components/useCallback/classCallback";
import UseMemo from "./Components/useMemo/ClassMemo";
import FunctionalRefs from "./Components/useRefs/FunctionalRefs";
import ClassRefs from "./Components/useRefs/ClassRefs";
import LayoutEffect from "./Components/useLayoutEffect";
import HOC from "./Components/HOC";
import RenderProps from "./Components/RenderProps";
import CustomHooks from "./Components/CustomHooks";
import Portals from "./Components/Portals/Portal";
import { useEffect, useState } from "react";

function App() {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);

  useEffect(() => {
    let interval: any = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };
  return (
    <div className="App">
      <h1>Hello Timer</h1>
      {time}
      <button onClick={handleStart}>Start</button>
      <button onClick={handlePauseResume}>Stop</button>
    </div>
  );
}

export default App;
