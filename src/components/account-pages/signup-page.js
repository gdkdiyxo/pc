import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import SignupForm from './signup-form';
import { handleRefresh } from '../../actions/auth';
import './account-pages.css';

export class SignupPage extends React.Component {
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
            alt="the deltio icon, a postcard"
            className="icon-main"
          />
        </div>
        <div className="account-form-wrapper">
          <h2>Sign up</h2>
          <SignupForm />
          {this.props.loading && <i className="fas fa-3x fa-spinner fa-pulse" />}
          <br />
          <p>Already a user?</p>
          <button>
            <Link to="/login">Log in here</Link>
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

export default connect(mapStateToProps)(SignupPage);
