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
import Timer from "./Components/timer/timer";
import FunctionTransition from "./Components/useTransition/FunctionTransition";
import ClassTrans from "./Components/useTransition/ClassTrans";
import DefferHook from "./Components/useDefferedValue/Parent";
import ATM from "./Components/ATM";
import Folder from "./Components/FolderQuestion";
import Menu from "./Components/Menu";

function App() {
  return (
    <div className="App">
      <Folder />
    </div>
  );
}

export default App;
