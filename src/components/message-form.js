import React from 'react';
import { connect } from 'react-redux';
import './message-form.css';

export class MessageForm extends React.Component {
  onChange(event) {
    event.preventDefault();
    const text = this.input.value;
    console.log(text);
    this.input.focus();
  }

  render() {
    return (
      <div className="message-form-wrapper">
        <h3>2) Add your message!</h3>
        <textarea defaultValue="Drop somebody a line!" />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  message: state.message
});

export default connect(mapStateToProps)(MessageForm);
