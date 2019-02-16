import React from 'react';
import { Link } from 'react-router-dom';
import SignupForm from './signup-form';
import './account-pages.css';

export default function SignupPage() {
  return (
    <main role="main">
      <div className="account-page-icon">
        <img
          src="../images/deltio-icon-main.png"
          alt="the deltio icon, a postcard"
          className="icon-main"
        />
      </div>
      <div className="account-form-wrapper">
        <h2>Sign up</h2>
        <SignupForm />
        <br />
        <p>Already a user?</p>
        <button>
          <Link to="/login">Log in here</Link>
        </button>
      </div>
    </main>
  );
}
