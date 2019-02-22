import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { loginUser } from '../../actions/auth';

import './home.css';

export class Home extends React.Component {
  demoLogin() {
    const username = 'testuser';
    const password = 'password';
    this.props.dispatch(loginUser(username, password));
  }

  render() {
    return (
      <div>
        <main role="main" className="homepage-main">
          <div className="icon-main">
            <img
              src="../images/deltio-icon-main.png"
              alt="The deltio icon, a postcard"
              className="icon-main"
            />
          </div>

          <header className="homepage-header">
            <h1>Welcome to Deltio</h1>
            <h3>Deltiology is the study and collection of postcards.</h3>
            <h3>With Deltio, you can create, collect, and share beautiful digital postcards.</h3>
          </header>

          <section className="instruction-wrapper">
            <div className="instruction">
              <i className="far fa-4x fa-image" />
              <p>Choose from thousands of professional images.</p>
            </div>
            <div className="instruction">
              <i className="fas fa-4x fa-pen-fancy" />
              <p>Flip the postcard and add your message.</p>
            </div>
            <div className="instruction">
              <i className="fas fa-4x fa-at" />
              <p>Add a list of recipient emails, and send it off!</p>
            </div>
          </section>
          <h3>Try out the demo, or sign up to start your collection.</h3>
          <div className="homepage-btn-wrapper">
            <Link to="/create">
              <button className="homepage-btn" onClick={e => this.demoLogin(e)}>
                Try the demo
              </button>
            </Link>
            <Link to="/signup">
              <button className="homepage-btn">Sign up</button>
            </Link>
          </div>
        </main>
        <footer role="contentinfo" className="footer">
          <p>Created by Mark Yapp</p>
        </footer>
      </div>
    );
  }
}

export default connect()(Home);
