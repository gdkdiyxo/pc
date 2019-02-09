import React from 'react';
import './nav-bar.css';

import { Link } from 'react-router-dom';

export default class NavBar extends React.Component {
  // goToDemo(event) {
  //   // event.preventDefault();
  //   console.log('goToDemo fired');
  //   this.props.history.push('/create');
  // }
  render() {
    return (
      <nav role="navigation">
        <p className="nav-logo">Deltio</p>
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
