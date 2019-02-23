import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import LoginForm from './login-form';
import { handleRefresh, setAuthError } from '../../actions/auth';

import './account.css';

export class Login extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleRefresh());
  }

  clearErrors() {
    this.props.dispatch(setAuthError(null));
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
          <div className="account-form-error">
            {this.props.error ? (
              <p className="error-message" aria-live="polite">
                {this.props.error}
              </p>
            ) : (
              <br />
            )}
          </div>
          <p className="demo-login-info">
            Demo login:
            <br /> username: <b>demouser</b> | password: <b>demopassword</b>
          </p>
          <br />
          <p>Need an account?</p>
          <button type="submit" onClick={e => this.clearErrors(e)}>
            <Link to="/signup">Sign up here</Link>
          </button>
        </div>
        {this.props.loading && <i className="fas fa-3x fa-spinner fa-pulse" />}
      </main>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  loading: state.auth.loading,
  error: state.auth.error
});

export default connect(mapStateToProps)(Login);
