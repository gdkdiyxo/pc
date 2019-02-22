import React from 'react';
import { connect } from 'react-redux';

import { clearRecipients, addRecipient, flipCard } from '../../actions/card';

export class RecipientForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: ''
    };
  }

  validateForm() {
    const maxRecipients = 8;
    return this.props.recipients.length < maxRecipients;
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
    } else {
      this.setState({ errorMessage: 'Reached maximum recipients' });
    }
  }

  clearRecipients() {
    this.props.dispatch(clearRecipients());
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
            />
            <button type="submit">Add</button>
            <button type="button" onClick={e => this.clearRecipients(e)}>
              Delete all
            </button>
          </div>
          <div className="error-message">{this.state.errorMessage}</div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipients: state.card.recipients,
  isCardFlipped: state.card.isCardFlipped
});
export default connect(mapStateToProps)(RecipientForm);
