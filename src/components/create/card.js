import React from 'react';
import { connect } from 'react-redux';

import { flipCard, deleteEmail } from '../../actions/card';

function Recipient(props) {
  return (
    <div className="card-email">
      <p>{props.email}</p>
      <button className="email-delete-btn" onClick={e => props.onClick(e, props.index)}>
        <i className="fa fa-trash" />
      </button>
    </div>
  );
}

export class Card extends React.Component {
  flipCard() {
    this.props.dispatch(flipCard());
  }

  deleteEmail(e, index) {
    e.preventDefault();
    e.stopPropagation();
    this.props.dispatch(deleteEmail(index));
  }

  render() {
    //Render carriage return when displaying message
    const formattedMessage = this.props.message.split('\n').map((item, key) => {
      return (
        <span key={key}>
          {item}
          <br />
        </span>
      );
    });

    const emailList = this.props.recipients.map((email, index) => (
      <Recipient
        key={index}
        email={email}
        index={index}
        onClick={(event, index) => this.deleteEmail(event, index)}
      />
    ));

    //cardClass determines which side of card is showing
    const cardClass = this.props.isCardFlipped ? 'card-outer card-flip' : 'card-outer ';
    return (
      <section card={this.props.card} className={cardClass} onClick={e => this.flipCard(e)}>
        <div className="card-front">
          <p className="flip-instruction">Click to flip</p>

          <img src={this.props.image.full} alt={this.props.image.alt} />
          <p className="photo-credit">
            Photo credit:{' '}
            <a
              href={`${this.props.image.portfolio}?utm_source=Deltio&utm_medium=referral`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {this.props.image.credit}
            </a>{' '}
            on{' '}
            <a href="http://www.unsplash.com" target="_blank" rel="noopener noreferrer">
              Unsplash
            </a>
          </p>
        </div>

        <div className="card-back">
          <div className="card-message">{formattedMessage}</div>
          <img className="stamp-icon" src="../images/stamp-icon.png" alt="A stamp icon" />
          <div className="card-emails-container">{emailList}</div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  isCardFlipped: state.card.isCardFlipped
});

export default connect(mapStateToProps)(Card);
