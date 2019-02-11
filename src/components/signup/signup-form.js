import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { signupUser } from '../../actions/auth';

export class SignupForm extends React.Component {
  onSubmit(values) {
    console.log(values);
    return this.props.dispatch(signupUser(values));
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        <div className="form-row">
          <label htmlFor="name">Name</label>
          <Field component="input" name="name" type="text" />
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
}

export default reduxForm({
  form: 'signup'
})(SignupForm);
