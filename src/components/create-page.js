import React from 'react';

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
      <div className="footer">
        <p>Created by Mark Yapp</p>
      </div>
    </div>
  );
}
