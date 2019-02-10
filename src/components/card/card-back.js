import React from 'react';
import { connect } from 'react-redux';
import './card-back.css';

export class CardBack extends React.Component {
  render() {
    const emailList = this.props.recipients.map((email, index) => (
      <div key={index}>
        <p>{email}</p>
        <hr />
      </div>
    ));

    return (
      <div className="card-message-container">
        <div className="message">{this.props.message}</div>
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
