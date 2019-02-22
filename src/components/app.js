import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './nav/nav';
import HomePage from './home-page/home-page';
import SignupPage from './account-pages/signup-page';
import LoginPage from './account-pages/login-page';
import CreatePage from './create-page/create-page';
import PreviewPage from './preview-page/preview-page';
import PostcardPage from './postcard-page/postcard-page';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <div>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/signup" component={SignupPage} />
            <Route exact path="/login" component={LoginPage} />
            <Route exact path="/create" component={CreatePage} />
            <Route exact path="/preview" component={PreviewPage} />
            <Route path="/postcards/" component={PostcardPage} />
          </div>
        </div>
      </Router>
    );
  }
}
