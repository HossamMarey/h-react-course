import React from "react";
import { Outlet } from "react-router-dom";
import MainHeader from "../components/layout/header/MainHeader";
const MainLayout = () => {
  return (
    <>
      <MainHeader />
      <div
        className="absolute inset-0 max-h-[50vh] z-0  bg-cover bg-no-repeat
        "
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
        }}
      ></div>
      <main className="relative pt-16 ">
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  );
};

export default MainLayout;
