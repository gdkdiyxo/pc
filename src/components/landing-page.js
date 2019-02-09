import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './footer';
import './landing-page.css';

export default class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <header role="banner" className="landing-page-header">
          <h1>Welcome to Deltio</h1>
          <h3>Create and share beautiful digital postcards.</h3>
        </header>

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
        <button className="demo-btn">
          <Link to="/create">Try it out</Link>
        </button>
        <Footer />
      </div>
    );
  }
}
