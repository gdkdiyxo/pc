import React from 'react';
import { API_BASE_URL } from '../config';

import CardContainer from './card/card-container';

export default class PostcardPage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      card: {},
      loading: true,
      error: null
    };
  }

  componentDidMount() {
    console.log('component mounted');
    const cardId = window.location.pathname.split('postcards/')[1];
    this.getCard(cardId);
  }

  getCard(cardId) {
    // this.setState({
    //   loading: true
    // });
    console.log(cardId);
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
      return <p>Loading</p>;
    } else if (!this.state.loading) {
    }
    return <CardContainer card={this.state.card} />;
  }
}
