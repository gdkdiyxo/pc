import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavBar from "./nav-bar";
import LandingPage from "./landing-page";
import CreatePage from "./create-page";
import Footer from "./footer";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/create" component={CreatePage} />
          <Footer />
        </div>
      </Router>
    );
  }
}
