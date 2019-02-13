import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/auth';

import './nav-bar.css';

function LoggedOutLinks() {
  return (
    <div>
      <button className="nav-btn">
        <Link to="/signup">Sign up</Link>
      </button>
      <button className="nav-btn">
        <Link to="/login">Log in</Link>
      </button>
    </div>
  );
}

function LoggedInLinks(props) {
  return (
    <div>
      <button className="nav-btn">Account</button>
      <button className="nav-btn" onClick={e => props.onClick(e)}>
        <Link to="/">Log out</Link>
      </button>
    </div>
  );
}

export class NavBar extends React.Component {
  onClick(e) {
    this.props.dispatch(logoutUser());
  }

  render() {
    return (
      <header role="banner" className="landing-page-header">
        <nav role="navigation">
          <div className="nav-icon">
            <Link to="/">
              <img src="../images/deltio-nav-icon.png" alt="the yappr logo, a postcard" />
            </Link>
          </div>

          {!this.props.currentUser ? (
            <LoggedOutLinks />
          ) : (
            <LoggedInLinks onClick={e => this.onClick(e)} />
          )}
        </nav>
      </header>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(NavBar);
