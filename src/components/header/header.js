import React from "react";
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
            <a href="/" className="nav-link">
              Accueil
            </a>
          </li>
          <a href="/about" className="nav-link">
            À Propos
          </a>
          <li></li>
        </ul>
      </nav>
    </header>
  );
}
