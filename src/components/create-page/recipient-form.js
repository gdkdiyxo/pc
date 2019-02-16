import React from 'react';
import { connect } from 'react-redux';

import { clearRecipients, addRecipient, feelRecipientForm, flipCard } from '../../actions/card';

export class RecipientForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipients: 0,
      maxRecipients: 8,
      errorMessage: ''
    };
  }

  clearRecipients() {
    if (this.props.recipientFormTouched === false) {
      this.props.dispatch(feelRecipientForm());
      this.props.dispatch(clearRecipients());
    }
  }

  validateForm() {
    return this.state.recipients < this.state.maxRecipients ? true : false;
  }

  addRecipient(e) {
    e.preventDefault();
    const email = this.emailInput.value;
    if (!this.props.isCardFlipped) {
      this.props.dispatch(flipCard());
    }
    if (this.validateForm()) {
      this.props.dispatch(addRecipient(email));
      this.emailInput.value = '';
      this.setState({ recipients: this.state.recipients + 1 });
    } else {
      this.setState({ errorMessage: 'Reached maximum recipients' });
    }
  }

  render() {
    return (
      <div className="create-page-form-wrapper">
        <form className="recipient-form" onSubmit={e => this.addRecipient(e)}>
          <label htmlFor="recipient-list">
            3) Add recipients — when you send a card they'll receive an email with a link to view
            it.
          </label>
          <div className="create-page-form-row">
            <input
              id="recipient-list"
              type="email"
              required={true}
              placeholder="Add up to 8 email addresses"
              ref={input => (this.emailInput = input)}
              onChange={e => this.clearRecipients(e)}
            />
            <button type="submit">Add</button>
          </div>
          <div className="error-message">{this.state.errorMessage}</div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipientFormTouched: state.card.recipientFormTouched,
  recipients: state.card.recipients,
  isCardFlipped: state.card.isCardFlipped
});
export default connect(mapStateToProps)(RecipientForm);
