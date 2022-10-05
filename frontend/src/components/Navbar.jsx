import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

import "../styles/components/navbar.css";

const activeStyle = {
  color: "black",
  textDecoration: "none",
};

const Navbar = () => {
  const { user } = useContext(AuthContext);

  const renderConditionalNavLinks = () => {
    if (user) {
      // Add JSX for routes after being logged in
      return (
        <>
          <li className="navbar__item">
            <NavLink
              to={"/create"}
              className={({ isActive }) =>
                isActive ? "navbar__link active" : "navbar__link"
              }
            >
              Create
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to={`/user/${user._id}`}
              className={({ isActive }) =>
                isActive ? "navbar__link active" : "navbar__link"
              }
            >
              Profile
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to={"/logout"}
              className={({ isActive }) =>
                isActive ? "navbar__link active" : "navbar__link"
              }
            >
              Logout
            </NavLink>
          </li>
        </>
      );
    } else {
      return (
        <>
          <li className="navbar__item">
            <NavLink
              to={"/login"}
              className={({ isActive }) =>
                isActive ? "navbar__link active" : "navbar__link"
              }
            >
              Login
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to={"/register"}
              className={({ isActive }) =>
                isActive ? "navbar__link active" : "navbar__link"
              }
            >
              Register
            </NavLink>
          </li>
        </>
      );
    }
  };

  return (
    <nav className="navbar">
      <div className="container">
        <NavLink to={"/"} className="navbar__link navbar__logo active">
          #100DaysOfCode
        </NavLink>
        <ul className="navbar__list">
          <li className="navbar__item">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive ? "navbar__link active" : "navbar__link"
              }
            >
              Home
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink
              to={"/guides"}
              className={({ isActive }) =>
                isActive ? "navbar__link active" : "navbar__link"
              }
            >
              Guides
            </NavLink>
          </li>

          {renderConditionalNavLinks()}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
