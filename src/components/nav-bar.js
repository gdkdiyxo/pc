import React from 'react';
import './nav-bar.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class NavBar extends React.Component {
  goToDemo(event) {
    // event.preventDefault();
    console.log('goToDemo fired');
    this.props.history.push('/create');
  }
  render() {
    return (
      <Router>
        <nav role="navigation">
          <h3 className="nav-logo">Deltio</h3>
          <div className="nav-btns">
            <button onClick={e => this.goToDemo(e)}>
              <Link to="/login">Log in</Link>
            </button>
            <button className="signup-btn">Sign up</button>
            <button className="account-btn">Account</button>
            <button className="logout-btn">Log out</button>
          </div>
        </nav>
      </Router>
    );
  }
}
