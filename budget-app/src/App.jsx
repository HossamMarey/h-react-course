import { useEffect, useState } from "react";
import Routes from "./Routes";
import Cookies from "js-cookie";
import { useLocation } from "react-router-dom";
import { AuthProvider } from "./services/context/AuthContext";
import { TransactionsProvider } from "./services/context/TransactionsContext";

function App() {
  return (
    <TransactionsProvider>
      <Routes />
    </TransactionsProvider>
  );
}

export default App;
