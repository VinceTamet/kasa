import React from "react";
import logoFooter from "../../assets/kasa-logo-footer.png";
import "./footer.scss";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img src={logoFooter} alt="Kasa Logo"></img>
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}
