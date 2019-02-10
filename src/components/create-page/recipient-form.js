import React from 'react';
import { connect } from 'react-redux';

import { clearRecipients, addRecipient, feelRecipientForm } from '../../actions';
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
        <form onSubmit={e => this.addRecipient(e)}>
          <label htmlFor="recipient-list">3) Add recipients' emails</label>
          <div className="recipient-form-row">
            <input
              id="recipient-list"
              type="email"
              required={true}
              placeholder="add emails here"
              ref={input => (this.emailInput = input)}
              onChange={e => this.clearRecipients(e)}
            />
            <button type="submit">Add</button>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipientFormTouched: state.card.recipientFormTouched,
  recipients: state.card.recipients
});
export default connect(mapStateToProps)(RecipientForm);
