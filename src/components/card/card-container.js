import React from 'react';
import { connect } from 'react-redux';
import CardFront from './card-front';
import CardBack from './card-back';

import { flipCard } from '../../actions';
import './card-container.css';

export class CardContainer extends React.Component {
  flipCard(e) {
    this.props.dispatch(flipCard());
  }

  render() {
    const cardClass = this.props.isCardFlipped ? 'card-back' : 'card-front';
    return (
      <div>
        <p className="flip-instructions">Click on postcard to flip. </p>
        <section className="card-outer" onClick={e => this.flipCard(e)}>
          <div className={cardClass}>
            <CardFront />
            <CardBack />
          </div>
        </section>
        <p className="photo-credit">
          Compliments of www.unsplash.com Photo credit:{' '}
          <a href="www.unsplash.com">[photographer]</a>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isCardFlipped: state.isCardFlipped
});

export default connect(mapStateToProps)(CardContainer);
