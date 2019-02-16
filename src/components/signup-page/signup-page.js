import React from 'react';
import { Link } from 'react-router-dom';
import SignupForm from './signup-form';
import './signup-page.css';

export default function SignupPage() {
  return (
    <main role="main">
      <section className="signup-form-wrapper">
        <h2>Sign up</h2>
        <SignupForm />
        <br />
        <button type="submit" className="switch-signup-login-btn">
          <Link to="/login">Log in here</Link>
        </button>
      </section>
    </main>
  );
}
