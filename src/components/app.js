import React from "react";
import LandingPage from "./landing-page";
import SignupModal from "./signup-modal";

export default class App extends React.Component {
  render() {
    return (
      <div>
        <LandingPage />
        <SignupModal />
      </div>
    );
  }
}
