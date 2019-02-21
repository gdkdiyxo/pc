import React from 'react';
import { connect } from 'react-redux';

import CardFront from './card-front';
import CardBack from './card-back';
import { flipCard } from '../../actions/card';

export class CardContainer extends React.Component {
  flipCard() {
    this.props.dispatch(flipCard());
  }

  render() {
    const cardClass = this.props.isCardFlipped ? 'card-back' : 'card-front';
    return (
      <section className="card-outer" onClick={e => this.flipCard(e)}>
        <div className={cardClass}>
          <CardFront image={this.props.card.image} />
          <CardBack message={this.props.card.message} recipients={this.props.card.recipients} />
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  isCardFlipped: state.card.isCardFlipped
});

export default connect(mapStateToProps)(CardContainer);
