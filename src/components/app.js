import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Nav from './nav/nav';
import Home from './home/home';
import Signup from './account/signup';
import Login from './account/login';
import Create from './create/create';
import Preview from './preview/preview';
import Postcard from './postcard/postcard';

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Nav />
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/create" component={Create} />
            <Route exact path="/preview" component={Preview} />
            <Route path="/postcards/" component={Postcard} />
          </div>
        </div>
      </Router>
    );
  }
}
