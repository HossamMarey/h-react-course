import { useEffect, useState } from "react";
import useCounter from "./assets/hooks/useCounter";
import MainCounter from "./assets/component/MainCounter";
import {
  CounterContext,
  CounterProvider,
} from "./assets/context/CounterContext";
import HelloWorld from "./assets/component/HelloWorld";
import { UsersProvider } from "./assets/context/UsersContext";
import MainUsers from "./assets/component/MainUsers";
import { createStore } from "redux";

console.log("SSSSSSSSSS");

// reducer
const initialState = { counter: 0, ssss: "ccc" };
const reducer = (state = initialState, action) => {
  if (action.type === "INC") {
    return {
      ...state,
      counter: state.counter + action.payload,
    };
  }

  if (action.type === "DEC") {
    return {
      ...state,
      counter: state.counter - action.payload,
    };
  }
  return state;
};
// store
// state
const store = createStore(reducer);

//ACTIONS
const increment = () => {
  return {
    type: "INC",
    payload: 1,
  };
};

const decrement = () => {
  return {
    type: "DEC",
    payload: 1,
  };
};
// actions

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(() => {
  return {
    type: "ssss",
  };
});

function App() {
  return (
    <CounterProvider>
      <UsersProvider>
        <main className="min-h-screen py-24 ">
          <div>
            <MainUsers />
          </div>
          <div className="mb-12">
            <MainCounter title="counter 1" />
          </div>
          <HelloWorld />
          <MainCounter title="counter 2" />
        </main>
      </UsersProvider>
    </CounterProvider>
  );
}

export default App;
