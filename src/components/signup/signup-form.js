import React from 'react';
import { Field, reduxForm } from 'redux-form';

export function SignupForm(props) {
  return (
    <form className="signup-form">
      <div className="form-row">
        <label htmlFor="name">Name</label>
        <Field component="input" name="name" type="text" />
      </div>
      <div className="form-row">
        <label htmlFor="email">Email</label>
        <Field component="input" name="email" type="email" />
      </div>
      <div className="form-row">
        <label htmlFor="username">Username</label>
        <Field component="input" name="username" type="text" />
      </div>
      <div className="form-row">
        <label htmlFor="password">Password</label>
        <Field component="input" name="password" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default reduxForm({
  form: 'signup'
})(SignupForm);
