import React from 'react';
import { connect } from 'react-redux';
import { getUserCards } from '../../actions/card';

import './user-cards.css';

export class UserCards extends React.Component {
  getUserCards() {
    const cardsList = this.props.dispatch(getUserCards());
  }
  render() {
    // const cardsList = this.props.image.map((image, index) => {
    //   return (
    //     <div className="user-card">
    //       <img src={image.thumb} alt={image.alt} />
    //     </div>
    //   );
    // });

    // return <section className="user-cards-container">{cardsList}</section>;
    return <section className="user-cards-container">{this.props.image.thumb}</section>;
  }
}

const mapStateToProps = state => ({
  image: state.card.image
});

export default connect(mapStateToProps)(UserCards);
