import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { getMe } from "../api/auth/auth.api";
import { TOKEN } from "../constant";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext({
  isAuth: null,
  user: null,
  isLoading: false,
  error: null,
  getUserData: () => {},
  logout: () => {},
});

export const AuthProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState();

  const getUserData = useCallback(() => {
    setIsLoading(true);

    getMe()
      .then((data) => {
        setUser(data);
        console.log("DATA", data);
      })
      .catch((error) => {
        setError(error?.response?.data?.message);
        setUser(null);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const logout = useCallback(() => {
    Cookies.remove(TOKEN);
    setUser(null);
    location.replace("/");
  }, []);

  useEffect(() => {
    getUserData();
  }, []);

  const isAuth = useMemo(() => {
    return !!user;
  }, [user]);

  return (
    <AuthContext.Provider
      value={{
        isAuth,
        user,
        isLoading,
        error,
        getUserData,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
