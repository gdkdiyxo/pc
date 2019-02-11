import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../actions/auth';

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

function LoggedInLinks(props) {
  return (
    <div>
      <button className="nav-right-btn">Account</button>
      <button className="nav-right-btn" onClick={e => props.onClick(e)}>
        <Link to="/">Log out1</Link>
      </button>
    </div>
  );
}

export class NavBar extends React.Component {
  onClick(e) {
    this.props.dispatch(logoutUser());
  }

  render() {
    return !this.props.currentUser ? (
      <nav role="navigation">
        <p className="nav-logo">
          <Link to="/">Deltio</Link>
        </p>
        <LoggedOutLinks />
      </nav>
    ) : (
      <nav role="navigation">
        <p className="nav-logo">
          <Link to="/">Deltio</Link>
        </p>
        <LoggedInLinks onClick={e => this.onClick(e)} />
      </nav>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(NavBar);
