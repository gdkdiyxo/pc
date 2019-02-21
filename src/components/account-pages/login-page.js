import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import LoginForm from './login-form';
import { handleRefresh } from '../../actions/auth';

import './account-pages.css';

export class LoginPage extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleRefresh());
  }

  render() {
    if (this.props.currentUser !== null) {
      return <Redirect to={`/create`} />;
    }

    return (
      <main role="main">
        <div className="account-page-icon">
          <img
            src="../images/deltio-icon-main.png"
            alt="The deltio icon, a postcard"
            className="icon-main"
          />
        </div>
        <div className="account-form-box">
          <h2>Log in</h2>
          <LoginForm />
          {this.props.loading && <i className="fas fa-3x fa-spinner fa-pulse" />}
          <p className="demo-login-info">
            Demo login:
            <br /> username: <b>testuser</b> | password: <b>password</b>
          </p>
          <br />
          <p>Need an account?</p>
          <button type="submit">
            <Link to="/signup">Sign up here</Link>
          </button>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  loading: state.auth.loading
});

export default connect(mapStateToProps)(LoginPage);
