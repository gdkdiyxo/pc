import React from 'react';
import { connect } from 'react-redux';

import { clearRecipients, addRecipient, feelRecipientForm } from '../actions';
import './recipient-form.css';

export class RecipientForm extends React.Component {
  clearRecipients() {
    console.log(this.props.recipientFormTouched);
    if (this.props.recipientFormTouched === false) {
      this.props.dispatch(feelRecipientForm());
      this.props.dispatch(clearRecipients());
    }
  }

  addRecipient(e) {
    e.preventDefault();
    const email = this.emailInput.value;
    this.props.dispatch(addRecipient(email));
  }

  render() {
    return (
      <div className="recipient-form-wrapper">
        <h3>3) Address your postcard!</h3>
        <form onSubmit={e => this.addRecipient(e)}>
          <label htmlFor="recipient-list">Send your postcard!</label>
          <input
            id="recipient-list"
            type="email"
            placeholder="add emails here"
            ref={input => (this.emailInput = input)}
            onChange={e => this.clearRecipients(e)}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipientFormTouched: state.recipientFormTouched,
  recipients: state.recipients
});
export default connect(mapStateToProps)(RecipientForm);
