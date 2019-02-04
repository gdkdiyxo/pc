import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./nav-bar";
import LandingPage from "./landing-page";
import SignupModal from "./signup-modal";
import CreatePage from "./create-page";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="app">
          <NavBar />
          <Route exact path="/" component={LandingPage} />
          <SignupModal />
          <Route exact path="/create" component={CreatePage} />
        </div>
      </Router>
    );
  }
}
