import React from 'react';
import './login-page.css';

export default function LoginPage() {
  return (
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
  );
}
