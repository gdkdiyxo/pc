import React from 'react';
import { Field, reduxForm } from 'redux-form';

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
    </form>
  );
}

export default reduxForm({
  form: 'login'
})(LoginForm);
