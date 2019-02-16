import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { saveCard } from '../../actions/card';
import { API_BASE_URL } from '../../config';
import './create-page.css';
import '../card/card.css';

import ImageForm from './image-form';
import MessageForm from './message-form';
import CardContainer from '../card/card-container';
import RecipientForm from './recipient-form';
import SavedCards from './saved-cards';

export class CreatePage extends React.Component {
  saveCard() {
    const currentCard = {
      image: {
        full: this.props.image.full,
        thumb: this.props.image.thumb,
        alt: this.props.image.alt
      },
      message: this.props.message,
      recipients: this.props.recipients
    };
    //POST request
    console.log(currentCard);
    this.props.dispatch(saveCard(currentCard));
  }

  render() {
    return (
      <main role="main">
        <ImageForm />
        <CardContainer />
        <MessageForm />
        <RecipientForm />
        <div className="card-btn-wrapper">
          <button className="create-page-btn">
            <Link to="/preview">Preview</Link>
          </button>
          <button className="create-page-btn" onClick={e => this.saveCard(e)}>
            Save
          </button>
          <button className="create-page-btn">
            <a
              href={`mailto:${
                this.props.recipients
              }?subject=You've received a postcard from [account name]&body=Click on this link to view the postcard: ${API_BASE_URL}/preview`}
            >
              Send
            </a>
          </button>
        </div>
        <hr />
        <SavedCards />
      </main>
    );
  }
}

const mapStateToProps = state => ({
  image: state.card.image,
  message: state.card.message,
  recipients: state.card.recipients
});

export default connect(mapStateToProps)(CreatePage);
