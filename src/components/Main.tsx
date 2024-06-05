import { useState } from "react";
import Button from "./Button";
import FastGoodCheap from "../enum/FastGoodCheap";

const Main = () => {
  const [state1, setState1] = useState(false);
  const [state2, setState2] = useState(false);
  const [state3, setState3] = useState(false);
  const statesObj = {
    [FastGoodCheap.Fast]: { state: state1, setState: setState1 },
    [FastGoodCheap.Good]: { state: state2, setState: setState2 },
    [FastGoodCheap.Cheap]: { state: state3, setState: setState3 },
  };
  const [lastActivated, setLastActivated] = useState<FastGoodCheap>(
    FastGoodCheap.Fast
  );

  const handleClick = ({ id }: { id: FastGoodCheap }) => {
    console.log(id);
    const stateObj = statesObj[id];
    const state = stateObj.state;
    const setState = stateObj.setState;
    setState(!state);
    setLastActivated(id);
    const condition1 =
      FastGoodCheap.Fast !== id ? statesObj[FastGoodCheap.Fast].state : !state;
    const condition2 =
      FastGoodCheap.Good !== id ? statesObj[FastGoodCheap.Good].state : !state;
    const condition3 =
      FastGoodCheap.Cheap !== id
        ? statesObj[FastGoodCheap.Cheap].state
        : !state;
    if (condition1 && condition2 && condition3) {
      const idToToggle = Object.values(FastGoodCheap).filter((value) => {
        return value !== id && value !== lastActivated;
      })[0];
      statesObj[idToToggle].setState(!statesObj[idToToggle].state);
    }
  };

  return (
    <main>
      <Button
        id={FastGoodCheap.Fast}
        state={statesObj[FastGoodCheap.Fast].state}
        text={FastGoodCheap.Fast}
        callback={handleClick}
      />
      <Button
        id={FastGoodCheap.Good}
        state={statesObj[FastGoodCheap.Good].state}
        text={FastGoodCheap.Good}
        callback={handleClick}
      />
      <Button
        id={FastGoodCheap.Cheap}
        state={statesObj[FastGoodCheap.Cheap].state}
        text={FastGoodCheap.Cheap}
        callback={handleClick}
      />
    </main>
  );
};

export default Main;
