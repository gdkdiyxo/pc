import React from 'react';
import { Link } from 'react-router-dom';
import './landing-page.css';

export default class LandingPage extends React.Component {
  render() {
    return (
      <div>
        <main role="main" className="homepage-main">
          <div className="icon-main">
            <img
              src="../images/deltio-icon-main.png"
              alt="the deltio icon, a postcard"
              className="icon-main"
            />
          </div>
          <h1>Welcome to Deltio</h1>

          <h3>
            Deltiology is the study and collection of postcards.
            {/* <br /> */}
          </h3>
          <h3>
            With Deltio, you can create beautiful digital postcards, share them, and start your own
            collection.
          </h3>
          <section className="instruction-wrapper">
            <div className="instruction">
              <i className="far fa-5x fa-image" />
              <p>Choose from thousands of professional images for the postcard front.</p>
            </div>
            <div className="instruction">
              <i className="fas fa-5x fa-pen-fancy" />
              <p>Flip the postcard and add your message.</p>
            </div>
            <div className="instruction">
              <i className="fas fa-5x fa-at" />
              <p>Add a list of recipient emails, and send it off!</p>
            </div>
          </section>
          <h3>Try out the demo, or sign up to start your collection.</h3>
          <div className="landing-page-btns">
            <button className="landing-page-btn">
              <Link to="/create">Try the demo</Link>
            </button>
            <button className="landing-page-btn">
              <Link to="/signup">Sign up</Link>
            </button>
          </div>
        </main>
        <footer role="contentinfo" className="footer">
          <p>Created by Mark Yapp</p>
        </footer>
      </div>
    );
  }
}
