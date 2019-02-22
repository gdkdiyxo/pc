import React from 'react';
import { connect } from 'react-redux';

import { flipCard, addMessage } from '../../actions/card';

export class MessageForm extends React.Component {
  onChange(text) {
    if (!this.props.isCardFlipped) {
      this.props.dispatch(flipCard());
    }
    this.props.dispatch(addMessage(text));
  }

  render() {
    const style = { flex: 1 };
    return (
      <form className="create-page-form-wrapper">
        <label htmlFor="message">2) Add your message</label>
        <div className="create-page-form-row">
          <textarea
            style={style}
            id="message"
            className="message-textarea"
            placeholder="e.g. Guess where I am right now?!"
            maxLength="300"
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
