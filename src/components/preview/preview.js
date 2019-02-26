import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Card from '../create/card';

import './preview.css';

export class Preview extends React.Component {
  render() {
    return (
      <main role="main" className="preview">
        <p>This is how the card will appear to recipients</p>

        <Card
          image={this.props.image}
          message={this.props.message}
          recipients={this.props.recipients}
        />

        <div className="card-btn-wrapper">
          <Link to="/create">
            <button className="create-page-btn">Back</button>
          </Link>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  image: state.card.image,
  message: state.card.message,
  recipients: state.card.recipients
});

export default connect(mapStateToProps)(Preview);
