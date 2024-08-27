import { useEffect, useState } from "react";
import Routes from "./Routes";
import Cookies from "js-cookie";
import { useLocation } from "react-router-dom";
import { AuthProvider } from "./services/context/AuthContext";

function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
