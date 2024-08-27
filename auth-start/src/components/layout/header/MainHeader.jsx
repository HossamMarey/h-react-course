import { NavLink } from "react-router-dom";

const MainHeader = () => {
  return (
    <header className="bg-black">
      <div className="container py-2 flex justify-between">
        <div> logo </div>
        <nav>
          <ul className="flex items-center gap-2">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) => (isActive ? "text-amber-500" : "")}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) => (isActive ? "text-amber-500" : "")}
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                // style={({ isActive }) => ({
                //   color: isActive ? "red" : "inherit",
                // })}
                className={({ isActive }) => (isActive ? "text-amber-500" : "")}
              >
                Blog
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/blog/create"
                className={({ isActive }) => (isActive ? "text-amber-500" : "")}
              >
                Add post
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/login"
                className={({ isActive }) => (isActive ? "text-amber-500" : "")}
              >
                Login
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default MainHeader;
