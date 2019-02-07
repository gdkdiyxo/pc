import React from 'react';
import { connect } from 'react-redux';

import { addMessage } from '../actions';

import './message-form.css';

export class MessageForm extends React.Component {
  constructor(props) {
    super(props);
    this.onChange = this.onChange.bind(this);
  }
  onChange(text) {
    console.log(text);
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
  message: state.message
});

export default connect(mapStateToProps)(MessageForm);
