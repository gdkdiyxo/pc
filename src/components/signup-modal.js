import React from "react";
import "./signup-modal.css";

export default function SignupModal() {
  return (
    <div>
      <div className="login-modal">
        <h2>Log in</h2>
        <form className="login-form">
          <label name="username">Username</label>
          <input for="username" type="text" />
          <label name="password">Password</label>
          <input for="password" />
          <button type="submit">Or, sign up</button>
        </form>
      </div>
      <div>
        <h2>Sign up</h2>
        <form className="signup-form">
          <label name="name">Name</label>
          <input for="name" type="text" />
          <label name="email">Email</label>
          <input for="email" type="email" />
          <label name="username">Username</label>
          <input for="username" type="text" />
          <label name="password">Password</label>
          <input for="password" />
          {/* <!-- is button the correct type? --> */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
