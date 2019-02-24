import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CLIENT_BASE_URL } from '../../config';

import CardForms from './card-forms';
import UserCards from './user-cards';
import Card from './card';

import { flipCard, clearCard, saveCard, updateCard, setEditing } from '../../actions/card';
import { handleRefresh } from '../../actions/auth';

import './create.css';

export class Create extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: ''
    };
  }

  componentDidMount() {
    this.props.dispatch(handleRefresh());
  }

  flipCard() {
    this.props.dispatch(flipCard());
  }

  clearCard() {
    this.props.dispatch(clearCard());
  }

  handleSave() {
    if (!this.props.image.full) {
      this.setState({
        errorMessage: 'Please add an image before saving'
      });
    } else {
      this.props.editing ? this.updateCard() : this.saveCard();
      this.setState({ errorMessage: '' });
    }
  }

  saveCard() {
    const currentCard = {
      username: this.props.currentUser,
      image: this.props.image,
      message: this.props.message,
      recipients: this.props.recipients
    };
    this.props.dispatch(saveCard(currentCard));
  }

  updateCard() {
    const currentCard = {
      cardId: this.props.cardId,
      image: this.props.image,
      message: this.props.message,
      recipients: this.props.recipients
    };
    this.props.dispatch(updateCard(currentCard));
    this.props.dispatch(setEditing(false));
  }

  sendCard() {
    if (!this.props.cardId) {
      this.setState({
        errorMessage: 'Please save card before sending'
      });
    } else if (this.props.recipients.length === 0) {
      this.setState({
        errorMessage: 'Add at least one email to send'
      });
    } else {
      this.updateCard();
      this.setState({ errorMessage: '' });
      window.open(
        `mailto:${this.props.recipients}?subject=${
          this.props.currentUser
        } sent you a postcard!&body=Click on this link to view the postcard: ${CLIENT_BASE_URL}/postcards/${
          this.props.cardId
        }`,
        '_self'
      );
    }
  }

  render() {
    console.log(this.props.currentUser);
    const cardClass = this.props.isCardFlipped ? 'card-back' : 'card-front';
    return (
      <main role="main">
        <section card={this.props.card} className="card-outer" onClick={e => this.flipCard(e)}>
          <div className={cardClass}>
            <Card
              image={this.props.image}
              message={this.props.message}
              recipients={this.props.recipients}
            />
          </div>
        </section>
        {(!this.props.cardId || this.props.editing || this.props.recipients.length === 0) && (
          <div className="error-message" aria-live="polite">
            {this.state.errorMessage}
          </div>
        )}

        <div className="card-btn-wrapper">
          <Link to="/preview">
            <button className="create-page-btn">Preview</button>
          </Link>
          <button
            disabled={!this.props.currentUser}
            className="create-page-btn"
            onClick={e => this.handleSave(e)}
          >
            {!this.props.editing ? 'Save' : 'Save changes'}
          </button>
          <button className="create-page-btn" onClick={e => this.sendCard(e)}>
            Send
          </button>
          <button className="create-page-btn" onClick={e => this.clearCard(e)}>
            New
          </button>
        </div>

        <CardForms />

        <section className="card-collection-container">
          <p className="card-collection-container-label">My collection</p>
          <UserCards />
        </section>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  card: state.card,
  cardId: state.card.cardId,
  isCardFlipped: state.card.isCardFlipped,
  image: state.card.image,
  message: state.card.message,
  recipients: state.card.recipients,
  editing: state.card.editing,
  currentUser: state.auth.currentUser,
  loading: state.auth.loading
});

export default connect(mapStateToProps)(Create);
