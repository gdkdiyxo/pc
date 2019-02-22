import React from 'react';
import { connect } from 'react-redux';

import { deleteEmail } from '../../actions/card';

import './card.css';

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

export class CardBack extends React.Component {
  deleteEmail(e, index) {
    e.preventDefault();
    e.stopPropagation();
    this.props.dispatch(deleteEmail(index));
  }

  render() {
    //Allow carriage return on message display
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
      <div className="card-back-container">
        <div className="card-message">{formattedMessage}</div>
        <div className="card-emails-container">{emailList}</div>
      </div>
    );
  }
}

export default connect()(CardBack);
