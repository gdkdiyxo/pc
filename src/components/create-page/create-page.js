import React from 'react';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../../config';
import './create-page.css';

import ImageForm from './image-form';
import MessageForm from './message-form';
import CardContainer from '../card/card-container';
import RecipientForm from './recipient-form';
import { connect } from 'react-redux';

export class CreatePage extends React.Component {
  render() {
    return (
      <div>
        <ImageForm />
        <CardContainer />
        <MessageForm />
        <RecipientForm />
        <div className="card-btn-wrapper">
          <button className="create-page-btn">
            <Link to="/preview">Preview postcard</Link>
          </button>
          <button className="create-page-btn">
            <a
              href={`mailto:${
                this.props.recipients
              }?subject=You've received a postcard from [account name]&body=Click on this link to view the postcard:${API_BASE_URL}/preview`}
            >
              Send postcard
            </a>
          </button>
        </div>
        <div className="footer">
          <p>Created by Mark Yapp</p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipients: state.card.recipients
});

export default connect(mapStateToProps)(CreatePage);
