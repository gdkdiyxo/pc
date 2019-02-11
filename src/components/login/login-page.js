import React from 'react';
import { Link, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import LoginForm from './login-form';
import Footer from '../footer';

export class LoginPage extends React.Component {
  render() {
    if (this.props.currentUser) {
      return <Redirect to={`/create/${this.props.currentUser}`} />;
    }
    return (
      <div className="login-form">
        <h2 className="center">Log in</h2>
        <LoginForm />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(LoginPage);
