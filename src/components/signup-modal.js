import React from "react";
import "./signup-modal.css";

export default function SignupModal() {
  return (
    <div className="signup-modal">
      <h2>Sign up</h2>
      <form className="signup-form">
        <label htmlFor="name">Name</label>
        <input id="name" type="text" />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />
        <label htmlFor="username">Username</label>
        <input id="username" type="text" />
        <label htmlFor="password">Password</label>
        <input id="password" />
        {/* <!-- is button the correct type? --> */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
