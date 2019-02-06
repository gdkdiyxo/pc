import React from 'react';
import './nav-bar.css';

export default class NavBar extends React.Component {
  goToDemo(event) {
    event.preventDefault();
    console.log('goToDemo fired');
    this.props.history.push('/create');
  }
  render() {
    return (
      <nav role="navigation">
        <h3 className="nav-logo">Deltio</h3>
        <div className="nav-btns">
          <button className="login-btn">Log in</button>
          <button className="signup-btn">Sign up</button>
          <button className="account-btn">Account</button>
          <button className="logout-btn">Log out</button>
        </div>
      </nav>
    );
  }
}
