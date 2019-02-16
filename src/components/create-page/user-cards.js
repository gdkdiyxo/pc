import React from 'react';
import { connect } from 'react-redux';
import { fetchCards } from '../../actions/card';

import './user-cards.css';

export class UserCards extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchCards());
  }

  deleteCard() {
    console.log('deleteCard btn clicked');
  }

  render() {
    if (this.props.loading) {
      return (
        <div>
          <p>Loading cards</p>
        </div>
      );
    }
    const userCards = this.props.userCards.map((card, index) => (
      <div className="user-card" key={index}>
        <button className="delete-card-btn" onClick={e => this.deleteCard(e)}>
          <i className="fa fa-trash" />
        </button>
        <img src={card.image.thumb} alt={card.image.alt} />
      </div>
    ));

    return (
      <section className="user-cards-container">
        <p>My saved postcards</p>
        {userCards}
      </section>
    );
  }
}

// UserCards.defaultProps = {
//   userCards: []
// };

const mapStateToProps = state => ({
  // image: state.card.image,
  userCards: state.card.userCards,
  loading: state.card.loading
});

export default connect(mapStateToProps)(UserCards);
