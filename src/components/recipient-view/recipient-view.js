import React from 'react';
import { connect } from 'react-redux';
import { API_BASE_URL } from '../../config';

import Card from '../create/card';
import { flipCard } from '../../actions/card';

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
    // this.setState({
    //   loading: true
    // });
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

  flipCard() {
    this.props.dispatch(flipCard());
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
      <main
        role="main"
        card={this.props.card}
        className="card-outer"
        onClick={e => this.flipCard(e)}
      >
        <div className={cardClass}>
          <Card
            image={this.state.card.image}
            message={this.state.card.message}
            recipients={this.state.card.recipients}
          />
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  isCardFlipped: state.card.isCardFlipped
});

export default connect(mapStateToProps)(RecipientView);
