import { Outlet } from "react-router-dom";
import MainHeader from "../components/layout/header/MainHeader";

const MainLayout = () => {
  return (
    <>
      <MainHeader />
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  );
};

export default MainLayout;
