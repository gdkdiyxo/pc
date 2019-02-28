import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { handleRefresh, loginUser } from '../../actions/auth';

import './home.css';

export function Loading() {
  return (
    <div>
      <i className="fas fa-3x fa-spinner fa-pulse" />
      <p className="loading-text">Loading</p>
    </div>
  );
}

export class Home extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleRefresh());
  }

  //Hard code demo account credentials so users can use the demo with a single click (in addition to visiting the Login page)
  demoLogin() {
    const username = 'demouser';
    const password = 'demopassword';
    this.props.dispatch(loginUser(username, password));
  }

  render() {
    if (this.props.currentUser !== null) {
      return <Redirect to={`/create`} />;
    }

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

          {this.props.loading && <Loading />}

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
              <p>Add recipient emails, and send it off!</p>
            </div>
          </section>
          <h3 className="homepage-header">
            Try out the demo, or sign up to start your collection.
          </h3>
          <div className="homepage-btn-wrapper">
            <button className="homepage-btn" onClick={e => this.demoLogin(e)}>
              Try the demo
            </button>
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

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser,
  loading: state.auth.loading
});

export default connect(mapStateToProps)(Home);
