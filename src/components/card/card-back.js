import React from 'react';
import { connect } from 'react-redux';
import './card-back.css';

export class CardBack extends React.Component {
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
      <div key={index}>
        <p>{email}</p>
        <hr />
      </div>
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
