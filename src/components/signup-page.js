import React from 'react';
import Footer from './footer';
import './signup-page.css';

export default function SignupPage() {
  return (
    <div>
      <section className="signup-form-wrapper">
        <h2>Sign up</h2>
        <form className="signup-form">
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input id="name" type="text" />
          </div>
          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" />
          </div>
          <div className="form-row">
            <label htmlFor="username">Username</label>
            <input id="username" type="text" />
          </div>
          <div className="form-row">
            <label htmlFor="password">Password</label>
            <input id="password" />
          </div>
          <button type="submit">Submit</button>
        </form>
        <button type="submit" className="switch-signup-login-btn">
          Or, Log In
        </button>
      </section>
      <Footer />
    </div>
  );
}
