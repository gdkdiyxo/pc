import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/auth';

import './nav-bar.css';

function LoggedOutLinks() {
  return (
    <div>
      <Link to="/signup">
        <button className="nav-btn">Sign up</button>
      </Link>
      <Link to="/login">
        <button className="nav-btn">Log in</button>
      </Link>
    </div>
  );
}

function LoggedInLinks(props) {
  return (
    <Link to="/">
      <button className="nav-btn" onClick={e => props.onClick(e)}>
        Log out
      </button>
    </Link>
  );
}

export class NavBar extends React.Component {
  onClick(e) {
    this.props.dispatch(logoutUser());
    // this.forceUpdate();
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
