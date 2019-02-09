import React from 'react';
import { connect } from 'react-redux';

import { addRecipient } from '../actions';
import './recipient-form.css';

export class RecipientForm extends React.Component {
  constructor(props) {
    super(props);
  }

  addRecipient(e) {
    e.preventDefault();
    const email = this.emailInput.value;
    console.log(email);
    this.props.dispatch(addRecipient(email));
    console.log(this.props.recipients);
  }

  render() {
    return (
      <div className="recipient-form-wrapper">
        <h3>3) Address your postcard!</h3>
        <form onSubmit={e => this.addRecipient(e)}>
          <label htmlFor="recipient-list">Send your postcard!</label>
          <input
            id="recipient-list"
            type="email"
            placeholder="add emails here"
            ref={input => (this.emailInput = input)}
          />
          <button type="submit">Add</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  recipients: state.recipients
});
export default connect(mapStateToProps)(RecipientForm);
