import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './nav-bar';
import LandingPage from './landing-page';
import SignupPage from './signup-page';
import LoginPage from './login-page';
import CreatePage from './create-page';
import PreviewPage from './preview-page';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar history={this.props.history} />
          <main role="main">
            <Route exact path="/" component={LandingPage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/create" component={CreatePage} />
            <Route exact path="/preview" component={PreviewPage} />
          </main>
        </div>
      </Router>
    );
  }
}
