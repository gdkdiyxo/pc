import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CLIENT_BASE_URL } from '../../config';

import ImageForm from './image-form';
import MessageForm from './message-form';
import CardContainer from '../card/card-container';
import RecipientForm from './recipient-form';
import SavedCards from './saved-cards';
import { saveCard, updateCard, setEditing } from '../../actions/card';
import { handleRefresh } from '../../actions/auth';

import './create-page.css';
import '../card/card.css';

export class CreatePage extends React.Component {
  componentDidMount() {
    this.props.dispatch(handleRefresh());
  }

  saveCard() {
    const { full, thumb, alt, credit, portfolio } = this.props.card.image;
    const currentCard = {
      username: this.props.currentUser,
      image: {
        full,
        thumb,
        alt,
        credit,
        portfolio
      },
      message: this.props.card.message,
      recipients: this.props.card.recipients
    };
    this.props.dispatch(saveCard(currentCard));
  }

  updateCard() {
    const { full, thumb, alt, credit, portfolio } = this.props.card.image;
    const currentCard = {
      image: {
        full,
        thumb,
        alt,
        credit,
        portfolio
      },
      message: this.props.card.message,
      recipients: this.props.card.recipients
    };
    const id = this.props.card.editingId;
    this.props.dispatch(updateCard(id, currentCard));
    this.props.dispatch(setEditing(false));
  }

  handleSave() {
    this.props.card.editing ? this.updateCard() : this.saveCard();
  }

  handleSend() {
    this.handleSave();
    window.open(
      `mailto:${this.props.recipients}?subject=${
        this.props.currentUser ? this.props.currentUser : 'Deltio Demo User'
      } sent you a postcard!&body=Click on this link to view the postcard: ${CLIENT_BASE_URL}/postcards/${
        this.props.card.editingId
      }`,
      '_self'
    );
  }

  render() {
    return (
      <main role="main">
        <ImageForm />
        <CardContainer card={this.props.card} />
        <MessageForm />
        <RecipientForm />
        {this.props.loading && <i className="fas fa-3x fa-spinner fa-pulse" />}

        <div className="card-btn-wrapper">
          <Link to="/preview">
            <button className="create-page-btn">Preview</button>
          </Link>

          {this.props.currentUser ? (
            <button className="create-page-btn" onClick={e => this.handleSave(e)}>
              {!this.props.card.editing ? 'Save' : 'Save changes'}
            </button>
          ) : null}

          <button className="create-page-btn" onClick={e => this.handleSend(e)}>
            Send
          </button>
        </div>
        <hr />
        <section className="card-collection-container">
          <p className="card-collection-container-label">My collection</p>
          <SavedCards />
        </section>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  card: state.card,
  currentUser: state.auth.currentUser,
  loading: state.auth.loading,
  sendEmail: state.auth.sendEmail
});

export default connect(mapStateToProps)(CreatePage);
