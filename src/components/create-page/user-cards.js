import React from 'react';
import { connect } from 'react-redux';
import { fetchCards } from '../../actions/card';
import { API_BASE_URL } from '../../config';

import './user-cards.css';

export class UserCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userCards: []
    };
  }
  componentDidMount() {
    //thunk fetch
    this.props.dispatch(fetchCards());
    // console.log(this.props.userCards);
    // const userCards = this.props.userCards.map((card, index) => {
    //   console.log(card);
    //   return (
    //     <div className="user-card" key={index}>
    //       <img src={card.image.thumb} alt={card.image.alt} />
    //     </div>
    //   );
  }

  //functioning fetch
  // fetch(`${API_BASE_URL}/cards`, {
  //   method: 'GET',
  //   headers: {
  //     'content-type': 'application/json'
  //   }
  // })
  //   .then(res => res.json())
  //   .then(cardsList => {
  //     this.setState({ userCards: cardsList });
  //   });
  // }

  render() {
    console.log(this.props.userCards);
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
        <img src={card.image.thumb} alt={card.image.alt} />
      </div>
    ));

    return (
      <div>
        {/* <button onClick={e => this.getUserCards(e)}>Click</button> */}
        <section className="user-cards-container">{userCards}</section>
      </div>
    );
    // return <section className="user-cards-container">{this.props.image.thumb}</section>;
  }
}

UserCards.defaultProps = {
  userCards: []
};

const mapStateToProps = state => ({
  image: state.card.image,
  userCards: state.card.userCards,
  loading: state.card.loading
});

export default connect(mapStateToProps)(UserCards);
