import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './nav-bar';
import LandingPage from './landing-page';
import SignupPage from './signup-page';
import LoginPage from './login-page';
import CreatePage from './create-page';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar history={this.props.history} />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/signup" component={SignupPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact path="/create" component={CreatePage} />
        </div>
      </Router>
    );
  }
}
