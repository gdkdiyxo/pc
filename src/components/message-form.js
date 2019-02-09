import React from 'react';
import { connect } from 'react-redux';

import { flipCard, addMessage } from '../actions';

import './message-form.css';

export class MessageForm extends React.Component {
  flipCard;
  onChange(text) {
    if (!this.props.isCardFlipped) {
      this.props.dispatch(flipCard());
    }
    this.props.dispatch(addMessage(text));
  }

  render() {
    return (
      <div className="message-form-wrapper">
        <h3>2) Add your message</h3>
        <textarea
          placeholder="i.e. Guess where I am right now?!"
          onChange={e => this.onChange(e.target.value)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  message: state.message,
  isCardFlipped: state.isCardFlipped
});

export default connect(mapStateToProps)(MessageForm);
