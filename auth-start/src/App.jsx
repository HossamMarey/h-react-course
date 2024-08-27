import { useEffect, useState } from "react";
import Routes from "./Routes";
import Cookies from "js-cookie";
import { useLocation } from "react-router-dom";
export const useToken = () => {
  const pathname = useLocation().pathname;
  const [token, setToken] = useState(null);
  useEffect(() => {
    updateToken();
  }, [pathname]);

  const updateToken = () => {
    const token = Cookies.get("TOKEN");
    setToken(token || null);
  };

  return { token, updateToken };
};
function App() {
  return (
    <>
      <Routes />
    </>
  );
}

export default App;
