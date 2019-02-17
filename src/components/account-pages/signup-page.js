import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import SignupForm from './signup-form';
import './account-pages.css';

export class SignupPage extends React.Component {
  render() {
    if (this.props.currentUser) {
      console.log(this.props.currentUser);
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
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(SignupPage);
