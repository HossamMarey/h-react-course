import { createContext, useContext } from "react";
import useCounter from "../hooks/useCounter";

export const CounterContext = createContext({
  count: 0,
  showCounter: true,
  setCount: () => {},
  setShowCounter: () => {},
});

export const CounterProvider = ({ children }) => {
  const { count, setCount, showCounter, setShowCounter, countTimer } =
    useCounter();

  return (
    <CounterContext.Provider
      value={{ count, showCounter, setShowCounter, setCount }}
    >
      {children}
    </CounterContext.Provider>
  );
};

// const { count, showCounter, setShowCounter, setCount } =
// useContext(CounterContext);

export const useCounterContext = () => {
  return useContext(CounterContext);
};
