import React from "react";
import "./signup-modal.css";

export default function SignupModal() {
  return (
    <div>
      <div className="login-modal">
        <h2>Log in</h2>
        <form className="login-form">
          <label htmlFor="username">Username</label>
          <input id="username" type="text" />
          <label htmlFor="password">Password</label>
          <input id="password" />
          <button type="submit">Or, sign up</button>
        </form>
      </div>
      <div>
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
    </div>
  );
}
