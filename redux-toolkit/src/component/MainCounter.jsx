import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementValue,
  toggleCounter,
} from "../redux/features/counterSlice";

const MainCounter = () => {
  const count = useSelector((state) => state.counter.count);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  console.log({ count, showCounter });

  return (
    <div className="container py-12 flex flex-col gap-5">
      {showCounter && <div>{count}</div>}

      <div>
        <button onClick={() => dispatch(increment())}> + </button>
        <button onClick={() => dispatch(incrementValue(3))}> +3 </button>
        <button onClick={() => dispatch(decrement())}> - </button>
        <button onClick={() => dispatch(toggleCounter())}>
          {showCounter ? "Hide" : "Show"}
        </button>
      </div>
    </div>
  );
};

export default MainCounter;
