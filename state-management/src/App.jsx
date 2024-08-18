import { useEffect, useState } from "react";
import useCounter from "./assets/hooks/useCounter";
import MainCounter from "./assets/component/MainCounter";
import {
  CounterContext,
  CounterProvider,
} from "./assets/context/CounterContext";
import HelloWorld from "./assets/component/HelloWorld";

function App() {
  return (
    <CounterProvider>
      <main className="min-h-screen py-24 ">
        <div className="mb-12">
          <MainCounter title="counter 1" />
        </div>
        <HelloWorld />
        <MainCounter title="counter 2" />
      </main>
    </CounterProvider>
  );
}

export default App;
