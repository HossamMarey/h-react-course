import { NavLink } from "react-router-dom";
import { useAuth } from "../../../services/context/AuthContext";
import { useEffect, useMemo, useState } from "react";
import Button from "../../shared/ui/Button";
import { FaPlus } from "react-icons/fa6";

const MainHeader = () => {
  const { logout, isAuth } = useAuth();
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const el = document.addEventListener("scroll", (e) => {
      setScroll(window.scrollY || 0);
    });

    return () => {
      document.removeEventListener("scroll", el);
    };
  }, []);

  const isScolled = useMemo(() => {
    return scroll > 150;
  }, [scroll]);

  return (
    <header
      className={`${
        isScolled ? " bg-slate-900 py-2" : "py-4"
      } fixed top-0 w-full transition-all duration-300   z-10`}
    >
      <div className="container py-2 flex justify-between">
        <div> logo </div>
        <nav>
          <ul className="flex items-center gap-2">
            <li>
              <Button>
                <FaPlus />
              </Button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainHeader;
