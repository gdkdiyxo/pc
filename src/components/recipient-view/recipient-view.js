import React from 'react';
import { connect } from 'react-redux';
import { API_BASE_URL } from '../../config';

import Card from '../create/card';

import './recipient-view.css';

export class RecipientView extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      card: {},
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    const cardId = window.location.pathname.split('postcards/')[1];
    this.getCard(cardId);
  }

  getCard(cardId) {
    fetch(`${API_BASE_URL}/api/cards/${cardId}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then(res => {
        if (!res.ok) {
          return Promise.reject(res.statusText);
        }
        return res.json();
      })
      .then(card => {
        this.setState({ card, loading: false });
      })
      .catch(err =>
        this.setState({
          loading: false,
          error: 'Error loading postcard'
        })
      );
  }

  render() {
    if (this.state.error) {
      return <p>{this.state.error}</p>;
    } else if (this.state.loading) {
      return <i className="fas fa-3x fa-spinner fa-pulse" />;
    } else if (!this.state.loading) {
    }

    return (
      <main role="main">
        <Card
          image={this.props.image}
          message={this.props.message}
          recipients={this.props.recipients}
        />
      </main>
    );
  }
}

const mapStateToProps = state => ({
  image: state.card.image,
  message: state.card.message,
  recipients: state.card.recipients
});

export default connect(mapStateToProps)(RecipientView);
// recipient-view"
