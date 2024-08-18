import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import { useCounterContext } from "./CounterContext";

export const UsersContext = createContext({
  users: [],
  loading: false,
  error: null,
});

const getUsers = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  if (res.ok) {
    const data = await res.json();
    return data;
  }

  throw new Error("Failed to fetch users");
};

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const GET_USERS_STATUS = {
  INITIAL: "INITIAL",
  SUCCESS: "SUCCESS",
  ERROR: "ERROR",
};
const reducer = (state, { type, payload }) => {
  switch (type) {
    case GET_USERS_STATUS.INITIAL:
      return {
        ...state,
        users: [],
        loading: true,
        error: null,
      };

    case GET_USERS_STATUS.SUCCESS:
      return {
        ...state,
        users: payload,
        loading: false,
        error: null,
      };
    case GET_USERS_STATUS.ERROR:
      return {
        ...state,
        users: [],
        loading: false,
        error: payload || "Unknown error",
      };

    default:
      return state;
  }
};

export const UsersProvider = ({ children }) => {
  // const [users, setUsers] = useState([]);
  // const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  const [{ users, loading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );

  useEffect(() => {
    // setLoading(true);
    // setError(null);
    dispatch({ type: GET_USERS_STATUS.INITIAL });
    getUsers()
      .then((data) => {
        // console.log(data);
        // setUsers(data);
        dispatch({ type: GET_USERS_STATUS.SUCCESS, payload: data });
      })
      .catch((err) => {
        // console.log("error ", err);
        // setError(err);
        dispatch({ type: GET_USERS_STATUS.ERROR, payload: err });
      });
    // .finally(() => {
    //   setLoading(false);
    // });
  }, []);

  return (
    <UsersContext.Provider value={{ users, loading, error }}>
      {children}
    </UsersContext.Provider>
  );
};

export const useUsersContext = () => useContext(UsersContext);
