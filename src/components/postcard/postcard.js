import React from 'react';
import { connect } from 'react-redux';
import { API_BASE_URL } from '../../config';

import CardFront from '../create-page/card-front';
import CardBack from '../create-page/card-back';
import { flipCard } from '../../actions/card';

export class Postcard extends React.Component {
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

  flipCard() {
    this.props.dispatch(flipCard());
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
    const cardClass = this.props.isCardFlipped ? 'card-back' : 'card-front';
    if (this.state.error) {
      return <p>{this.state.error}</p>;
    } else if (this.state.loading) {
      return <p>Loading</p>;
    } else if (!this.state.loading) {
    }
    return (
      <section card={this.props.card} className="card-outer" onClick={e => this.flipCard(e)}>
        <div className={cardClass}>
          <CardFront image={this.props.card.image} />
          <CardBack message={this.props.card.message} recipients={this.props.card.recipients} />
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  card: state.card,
  currentUser: state.auth.currentUser,
  isCardFlipped: state.card.isCardFlipped,
  loading: state.auth.loading,
  sendEmail: state.auth.sendEmail
});

export default connect(mapStateToProps)(Postcard);
