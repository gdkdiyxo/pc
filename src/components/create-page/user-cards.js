import React from 'react';
import { connect } from 'react-redux';
import { fetchCards } from '../../actions/card';
import { API_BASE_URL } from '../../config';

import './user-cards.css';

export class UserCards extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     userCards: []
  //   };
  // }
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
    console.log(this.props.userCards[0]);
    const userCards = this.props.userCards.map((card, index) => (
      <div className="user-card" key={index}>
        <button className="delete-card-btn" onClick={e => this.deleteCard(e)}>
          <i className="fa fa-trash" />
        </button>
        <img src={card.image.thumb} alt={card.image.alt} />
      </div>
    ));

    return (
      <div>
        <section className="user-cards-container">{userCards}</section>
      </div>
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
