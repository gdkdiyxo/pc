import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import SignupForm from './signup-form';
import { handleRefresh } from '../../actions/auth';

import './account.css';

export class Signup extends React.Component {
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
          <h2>Sign up</h2>
          <SignupForm />
          <div className="account-form-error">
            {this.props.error ? (
              <p className="error-message" aria-live="polite">
                {this.props.error}
              </p>
            ) : (
              <br />
            )}
          </div>
          <p>Already a user?</p>
          <button>
            <Link to="/login">Log in here</Link>
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

export default connect(mapStateToProps)(Signup);
