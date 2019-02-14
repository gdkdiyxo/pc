import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import LoginForm from './login-form';

import './login-page.css';

export class LoginPage extends React.Component {
  render() {
    //redirect to user's create page
    // if (this.props.currentUser) {
    //   return <Redirect to={`/create/${this.props.currentUser}`} />;
    // }
    return (
      <div className="login-form">
        <h2 className="center">Log in</h2>
        <LoginForm />
        <br />
        <button type="submit" className="switch-signup-login-btn">
          <Link to="/signup">Sign up here</Link>
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(LoginPage);
