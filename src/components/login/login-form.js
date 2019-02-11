import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Field, reduxForm, focus } from 'redux-form';

import './login-page.css';

export function LoginForm(props) {
  return (
    <form>
      <div className="form-row">
        <label htmlFor="username">Username:</label>
        <Field component="input" name="username" type="text" />
      </div>
      <div className="form-row">
        <label htmlFor="password">Password:</label>
        <Field component="input" name="password" />
      </div>

      <button type="submit" className="login-form-submit-btn">
        Log in
      </button>
      <button type="submit" className="switch-signup-login-btn">
        <Link to="/signup">Or, sign up</Link>
      </button>
    </form>
  );
}

export default reduxForm({
  form: 'login'
})(LoginForm);
