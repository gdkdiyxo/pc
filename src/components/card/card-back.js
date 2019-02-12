import React from 'react';
import { connect } from 'react-redux';

import { deleteEmail } from '../../actions/card';
import './card-back.css';

function Recipient(props) {
  return (
    <div className="recipient-wrapper">
      <p>{props.email}</p>
      <button className="email-delete-btn" onClick={e => props.onClick(e, props.index)}>
        X
      </button>
      <hr />
    </div>
  );
}

export class CardBack extends React.Component {
  deleteEmail(event, index) {
    event.preventDefault();
    this.props.dispatch(deleteEmail(index));
  }

  render() {
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
      <div className="card-message-container">
        <div className="message">{formattedMessage}</div>
        <div className="card-email-container">{emailList}</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  message: state.card.message,
  recipients: state.card.recipients
});

export default connect(mapStateToProps)(CardBack);
