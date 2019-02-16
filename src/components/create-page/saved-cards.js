import React from 'react';
import { connect } from 'react-redux';
import { fetchCards } from '../../actions/card';

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
      <div className="saved-card" key={index}>
        <p className="saved-card-flip-instruction">Click to edit</p>
        <button className="delete-card-btn" onClick={e => this.deleteCard(e)}>
          <i className="fa fa-trash" />
        </button>
        <img src={card.image.thumb} alt={card.image.alt} />
      </div>
    ));

    return (
      <section className="saved-cards-container">
        <p className="saved-cards-container-label">My saved postcards</p>
        {userCards}
      </section>
    );
  }
}

const mapStateToProps = state => ({
  userCards: state.card.userCards,
  loading: state.card.loading
});

export default connect(mapStateToProps)(UserCards);
