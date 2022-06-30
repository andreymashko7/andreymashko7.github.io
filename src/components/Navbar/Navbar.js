import React from "react";
import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../img/icons/panda.svg";

const Navbar = () => {
  return (
    <header className="header">
      <div className="header__container">
        <Logo className="header__logo">
          <Link to="/" />
        </Logo>
        <div className="header__menu menu">
          <nav id="menu" className="menu__body">
            <ul className="menu__list">
              <li className="menu__item">
                <NavLink to="/" className="menu__link">
                  about
                </NavLink>
              </li>
              <li className="menu__item">
                <NavLink to="/todo" className="menu__link">
                  todo
                </NavLink>
              </li>
              <li className="menu__item">
                <NavLink to="/posts" className="menu__link">
                  posts
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
