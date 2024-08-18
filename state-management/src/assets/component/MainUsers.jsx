import React from "react";
import { useUsersContext } from "../context/UsersContext";

const MainUsers = () => {
  const { users, loading, error } = useUsersContext();

  return (
    <div className="flex flex-col items-center justify-center mb-12">
      MainUsers
      {loading && "loading..."}
      {error && "error"}
      <div className=" flex flex-col gap-3">
        {!loading &&
          !error &&
          users.map((user) => (
            <div key={user.id}>
              <h3> {user.name}</h3>
              <p> {user.email}</p>
            </div>
          ))}
      </div>
    </div>
  );
};

export default MainUsers;
