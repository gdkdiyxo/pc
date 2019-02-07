import React from 'react';

import './create-page.css';

import MessageForm from './message-form';
import CardContainer from './card-container';
import RecipientForm from './recipient-form';

export default function CreatePage() {
  return (
    <div>
      <div className="search-form-wrapper">
        <h3>1) Find an image!</h3>
        <form>
          <label htmlFor="search">Search for anything</label>
          <input id="search" />
          <button type="submit">Search</button>
          <button>Or, upload one of your images</button>
        </form>
      </div>
      <MessageForm />
      <CardContainer />
      <p className="photo-credit">
        Compliments of www.unsplash.com Photo credit: <a href="www.unsplash.com">[photographer]</a>
      </p>
      <RecipientForm />
      <div className="footer">
        <p>Created by Mark Yapp</p>
      </div>
    </div>
  );
}
