import React from 'react';
import Footer from './footer';
import './login-page.css';

export default function LoginPage() {
  return (
    <div>
      <section className="login-form-wrapper">
        <h2>Log in</h2>
        <form className="login-form">
          <div className="form-row">
            <label htmlFor="username">Username:</label>
            <input id="username" type="text" />
          </div>
          <div className="form-row">
            <label htmlFor="password">Password:</label>
            <input id="password" />
            <br />
          </div>
          <button type="submit" className="login-form-submit-btn">
            Log in
          </button>
        </form>
        <button type="submit" className="switch-signup-login-btn">
          Or, sign up
        </button>
      </section>
      <Footer />
    </div>
  );
}
