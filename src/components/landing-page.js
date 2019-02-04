import React from "react";
import "./landing-page.css";

import SignupModal from "./signup-modal";
import LoginModal from "./login-modal";

export default class LandingPage extends React.Component {
  // constructor(props) {
  //   super(props);
  // }

  goToDemo(event) {
    event.preventDefault();
    this.props.history.push("/create");
  }
  render() {
    return (
      <div>
        <header role="banner">
          <h1>Welcome to Deltio</h1>
          <h3>Create and share beautiful digital postcards.</h3>
        </header>

        <section className="userguide-1">
          Choose from thousands of beautiful, professional images
        </section>
        <section className="userguide-2">
          Flip the postcard and write your message on the back.
        </section>
        <section className="userguide-3">
          Add a list of recipients, and send it off!
        </section>
        <SignupModal />
        <LoginModal />
        <h3>
          <form onSubmit={e => this.goToDemo(e)}>
            <button>Click here to use the demo</button>
          </form>
        </h3>
      </div>
    );
  }
}
