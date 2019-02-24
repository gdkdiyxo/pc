import React from 'react';
import { connect } from 'react-redux';

import {
  searchImage,
  addMessage,
  clearRecipients,
  addRecipient,
  setEditing,
  flipCard
} from '../../actions/card';

export class CardForms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: ''
    };
  }

  setEditing() {
    if (this.props.cardId) {
      this.props.dispatch(setEditing(true));
    }
  }

  searchImage(e) {
    e.preventDefault();
    this.props.isCardFlipped && this.props.dispatch(flipCard());
    const query = this.searchInput.value;
    this.setEditing();
    this.props.dispatch(searchImage(query));
  }

  onChange(text) {
    !this.props.isCardFlipped && this.props.dispatch(flipCard());
    this.setEditing();
    this.props.dispatch(addMessage(text));
  }

  isMaxRecipients() {
    const maxRecipients = 8;
    return !(this.props.recipients.length < maxRecipients);
  }

  addRecipient(e) {
    e.preventDefault();
    !this.props.isCardFlipped && this.props.dispatch(flipCard());
    const email = this.emailInput.value;
    if (this.isMaxRecipients()) {
      this.setState({
        errorMessage: 'Maximum recipients is 8'
      });
    } else {
      this.setState({ errorMessage: '' });
      this.props.dispatch(addRecipient(email));
      this.setEditing();
      this.emailInput.value = '';
    }
  }

  clearRecipients() {
    this.props.dispatch(clearRecipients());
  }

  render() {
    const value = this.props.cardId ? this.props.message : undefined;
    return (
      <div>
        <div className="create-page-form-wrapper">
          <form onSubmit={e => this.searchImage(e)}>
            <label htmlFor="search">
              1) Search for an image (you can click Search again for a different image)
            </label>
            <div className="create-page-form-row">
              <input
                id="search"
                placeholder="e.g. London, Paris, cat, nature"
                required={true}
                ref={input => (this.searchInput = input)}
              />
              <button type="submit">Search</button>
            </div>
            {this.props.error && (
              <p className="error-message" aria-live="polite">
                {this.props.error}
              </p>
            )}
          </form>
        </div>

        <form className="create-page-form-wrapper">
          <label htmlFor="message">2) Add your message</label>
          <div className="create-page-form-row">
            <textarea
              id="message"
              className="message-textarea"
              placeholder="e.g. Guess where I am right now?!"
              maxLength="300"
              onChange={e => this.onChange(e.target.value)}
              value={value}
            />
          </div>
        </form>

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
            {this.isMaxRecipients() && (
              <p className="error-message" aria-live="polite">
                Maximum recipients is 8
              </p>
            )}
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  results: state.card.results,
  cardId: state.card.cardId,
  message: state.card.message,
  recipients: state.card.recipients,
  isCardFlipped: state.card.isCardFlipped,
  editing: state.card.editing,
  error: state.card.error
});
export default connect(mapStateToProps)(CardForms);
