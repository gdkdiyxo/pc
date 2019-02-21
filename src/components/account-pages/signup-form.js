import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { signupUser } from '../../actions/auth';

export class SignupForm extends React.Component {
  onSubmit(values) {
    return this.props.dispatch(signupUser(values));
  }

  render() {
    return (
      <form onSubmit={this.props.handleSubmit(values => this.onSubmit(values))}>
        <div className="form-row">
          <label htmlFor="name">Name</label>
          <Field component="input" id="name" name="name" type="text" required={true} />
        </div>
        <div className="form-row">
          <label htmlFor="username">Username</label>
          <Field component="input" id="username" name="username" type="text" required={true} />
        </div>
        <div className="form-row">
          <label htmlFor="password">Password</label>
          <Field component="input" id="password" name="password" type="password" required={true} />
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'signup'
})(SignupForm);
