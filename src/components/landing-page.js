import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './footer';
import './landing-page.css';

export default class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <img
          src="../images/deltio-icon-main.png"
          alt="the deltio icon, a postcard"
          className="icon-main"
        />
        <header role="banner" className="landing-page-header">
          <h1>Welcome to Deltio</h1>
        </header>
        <h3>
          Deltiology is the study and collection of postcards.
          <br />
          With Deltio, you can pay homage to this practice by creating and sharing beautiful digital
          postcards.
        </h3>
        <section className="instruction-wrapper">
          <div className="instruction">
            <i className="far fa-5x fa-image" />
            <p>Choose from thousands of professional images, or upload one of your own.</p>
          </div>
          <div className="instruction">
            <i className="fas fa-5x fa-pen-fancy" />
            <p>Flip the postcard and write your message on the back.</p>
          </div>
          <div className="instruction">
            <i className="fas fa-5x fa-at" />
            <p>Add a list of recipient emails, and send it off!</p>
          </div>
        </section>
        <h3>Try out the demo, or create an account to start your collection.</h3>
        <div className="landing-page-btns">
          <button className="landing-page-btn">
            <Link to="/create">Try the demo</Link>
          </button>
          <button className="landing-page-btn">
            <Link to="/signup">Sign up</Link>
          </button>
        </div>
        <Footer />
      </div>
    );
  }
}
