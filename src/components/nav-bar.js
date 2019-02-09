import React from 'react';
import { Link } from 'react-router-dom';

import './nav-bar.css';

export default class NavBar extends React.Component {
  render() {
    return (
      <nav role="navigation">
        <p className="nav-logo">Deltio</p>
        <button>
          <Link to="/create">Try the demo</Link>
        </button>
        <div className="nav-btns">
          <button>
            <Link to="/login">Log in</Link>
          </button>
          <button className="signup-btn">
            <Link to="/signup">Sign up</Link>
          </button>
          <button className="account-btn">{/* <Link to="/login">Account</Link> */}Account</button>
          <button className="logout-btn">
            <Link to="/">Log out</Link>
          </button>
        </div>
      </nav>
    );
  }
}
