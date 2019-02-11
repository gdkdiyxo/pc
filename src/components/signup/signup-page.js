import React from 'react';
import { Link } from 'react-router-dom';
import SignupForm from './signup-form';
import './signup-page.css';

export default function SignupPage() {
  return (
    <div>
      <section className="signup-form-wrapper">
        <h2>Sign up</h2>
        <SignupForm />
        <button type="submit" className="switch-signup-login-btn">
          <Link to="/login">Or, Log In</Link>
        </button>
      </section>
    </div>
  );
}
