import React, { useContext } from "react";
import { CounterContext, useCounterContext } from "../context/CounterContext";

const HelloWorld = () => {
  const { count } = useCounterContext();
  return <div>HelloWorld {count}</div>;
};

export default HelloWorld;
