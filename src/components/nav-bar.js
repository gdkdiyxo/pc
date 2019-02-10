import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import './nav-bar.css';

function LoggedOutLinks() {
  return (
    <div>
      <button className="nav-demo-btn">
        <Link to="/create">Try the demo</Link>
      </button>
      <button className="nav-right-btn">
        <Link to="/signup">Sign up</Link>
      </button>
      <button className="nav-right-btn">
        <Link to="/login">Log in</Link>
      </button>
    </div>
  );
}

function LoggedInLinks() {
  return (
    <div>
      <button className="nav-right-btn">Account</button>
      <button className="nav-right-btn">
        <Link to="/">Log out</Link>
      </button>
    </div>
  );
}

export class NavBar extends React.Component {
  render() {
    return !this.props.currentUser ? (
      <nav role="navigation">
        <p className="nav-logo">Deltio</p>
        <LoggedOutLinks />
      </nav>
    ) : (
      <nav role="navigation">
        <p className="nav-logo">Deltio</p>
        <LoggedInLinks />
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  userAuth: state.userAuth
});

export default connect(mapStateToProps)(NavBar);
