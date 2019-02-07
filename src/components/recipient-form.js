import React from 'react';

import './recipient-form.css';

export default function RecipientForm(props) {
  return (
    <div className="recipient-form-wrapper">
      <h3>3) Address your postcard!</h3>
      <form>
        <label htmlFor="recipient-list">Send your postcard!</label>
        <input id="recipient-list" type="email" defaultValue="add emails here" />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}
