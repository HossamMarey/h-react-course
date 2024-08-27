import axios from "axios";
import React, { useCallback } from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
const MainLogin = () => {
  const navigate = useNavigate();
  const handleLogin = useCallback(async () => {
    //
    try {
      const data = {
        email: "admin@mail.com",
        password: "123456789",
      };

      const res = await axios.post(
        "http://localhost:5000/v1/api/auth/login",
        data
      );
      console.log(res.data);
      const user = res.data;
      const token = res.data.token;

      Cookies.set("TOKEN", token);
      navigate("/blog");
    } catch (error) {
      console.log(error);
    }
  }, []);
  return (
    <div>
      MainLogin
      <button className="p-3 bg-yellow-400 " onClick={handleLogin}>
        {" "}
        login{" "}
      </button>
    </div>
  );
};

export default MainLogin;
