import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/kasa-logo.png";

export function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Kasa Logo"></img>
      </div>
      <nav className="navigation">
        <ul>
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                `nav-link ${isActive ? "active" : ""}`
              }
            >
              À Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
