import React, { useContext, useReducer } from "react";
import useCounter from "../hooks/useCounter";
import { CounterContext, useCounterContext } from "../context/CounterContext";

const initialState = {
  count: 0,
  showCounter: true,
};
const reducer = (state, action) => {
  if (action.type === "INC") {
    return {
      ...state,
      count: state.count + action.payload,
    };
  }

  if (action.type === "DEC") {
    return {
      ...state,
      count: state.count - action.payload,
    };
  }

  if (action.type === "TOGGLE") {
    return {
      ...state,
      showCounter: !state.showCounter,
    };
  }

  return state;
};

const MainCounter = ({ title }) => {
  const { count, showCounter, setShowCounter, setCount } = useCounterContext();
  // const { count, setCount, showCounter, setShowCounter, countTimer } =
  //   useCounter();

  // const [state, dispatch] = useReducer(reducer, initialState);
  // const { count, showCounter } = state;

  // const increaseCount = (c) => {
  //   // action
  //   dispatch({ type: "INC", payload: c });
  // };
  // const decreaseCount = (c) => {
  //   dispatch({ type: "DEC", payload: c });
  // };
  // const toggleCounter = () => {
  //   dispatch({ type: "TOGGLE" });
  // };

  return (
    <section className="container flex flex-col gap-6 items-center justify-center  text-lg">
      <h2> {title} </h2>
      {showCounter && (
        <div className="text-3xl bg-slate-950 px-6 py-2 rounded-xl">
          {count}
        </div>
      )}

      <div className="flex items-center gap-3">
        {/* <button onClick={() => increaseCount(1)}> +1 </button>
        <button onClick={() => increaseCount(3)}> +3 </button>

        <button onClick={() => decreaseCount(1)}> -1 </button>
        <button onClick={() => decreaseCount(4)}> -4 </button> */}

        <button onClick={() => setCount((c) => c + 1)}> +1 </button>
        <button onClick={() => setCount((c) => c + 3)}> +3 </button>

        <button onClick={() => setCount((c) => c - 1)}> -1 </button>
        <button onClick={() => setCount((c) => c - 4)}> -4 </button>
      </div>

      <div>{/* <small> Timer {countTimer} </small> */}</div>

      <div>
        <button
          className="bg-yellow-950"
          // onClick={() => setShowCounter(!showCounter)}
          onClick={() => setShowCounter((prev) => !prev)}
        >
          {" "}
          {showCounter ? "Hide" : "Show"} counter{" "}
        </button>
      </div>
    </section>
  );
};

export default MainCounter;
