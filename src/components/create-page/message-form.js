import React from 'react';
import { connect } from 'react-redux';

import { flipCard, addMessage } from '../../actions/card';

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
      <form className="message-form-wrapper">
        <label htmlFor="message">2) Add your message</label>
        <div className="message-form-row">
          <textarea
            id="message"
            placeholder="i.e. Guess where I am right now?!"
            onChange={e => this.onChange(e.target.value)}
          />
        </div>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  message: state.card.message,
  isCardFlipped: state.card.isCardFlipped
});

export default connect(mapStateToProps)(MessageForm);
