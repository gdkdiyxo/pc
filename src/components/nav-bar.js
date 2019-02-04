import React from "react";
import "./nav-bar.css";

export default function NavBar() {
  return (
    <nav role="navigation">
      <h3 className="nav-logo">Deltio</h3>
      <button className="login-button">Log in</button>
      <button className="signup-button">Sign up</button>
    </nav>
  );
}
