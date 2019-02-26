import React from 'react';
import { API_BASE_URL } from '../../config';

import Card from '../create/card';

export default class RecipientView extends React.Component {
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
      <main role="main" className="preview">
        <p>Click or tap on the postcard to flip!</p>

        <Card
          image={this.state.card.image}
          message={this.state.card.message}
          recipients={this.state.card.recipients}
        />
      </main>
    );
  }
}
