import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../redux/features/loggedSlice";
import { getUsers } from "../redux/features/userSlice";

const UserState = () => {
  const isLogged = useSelector((state) => state.logged.isLogged);
  const usersState = useSelector((state) => state.users);
  const dispatch = useDispatch();

  console.log(usersState);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div>
      {isLogged ? "Logged" : "Not Logged"}

      <div>
        {!isLogged ? (
          <button onClick={() => dispatch(login())}> Login </button>
        ) : (
          <button onClick={() => dispatch(logout())}> logout </button>
        )}
      </div>
    </div>
  );
};

export default UserState;
