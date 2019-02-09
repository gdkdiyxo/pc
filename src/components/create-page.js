import React from 'react';
import { Link } from 'react-router-dom';
import { API_BASE_URL } from '../config';
import './create-page.css';

import ImageForm from './image-form';
import MessageForm from './message-form';
import CardContainer from './card-container';
import RecipientForm from './recipient-form';

export default function CreatePage() {
  return (
    <div>
      <ImageForm />
      <MessageForm />
      <CardContainer />
      <RecipientForm />
      <div className="card-btn-wrapper">
        <button className="create-page-btn">
          <Link to="/preview">Preview postcard</Link>
        </button>
        <button className="create-page-btn">
          <a
            href={`mailto:myapp115@gmail.com?subject=You've received a postcard from [account name]&body=Click on this link to view the postcard:${API_BASE_URL}/preview`}
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
