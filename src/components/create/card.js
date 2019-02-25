import React from 'react';
import { connect } from 'react-redux';

import { deleteEmail } from '../../actions/card';

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

    return (
      <div>
        <div className="card-image-container">
          <p className="card-flip-instruction">Click to flip</p>

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

        <div className="card-back-container">
          <div className="card-message">{formattedMessage}</div>
          <img className="stamp-icon" src="../images/stamp-icon.png" alt="A stamp icon" />
          <div className="card-emails-container">{emailList}</div>
        </div>
      </div>
    );
  }
}

export default connect()(Card);
