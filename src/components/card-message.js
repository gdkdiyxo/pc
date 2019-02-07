import React from 'react';
import { connect } from 'react-redux';
import './card-message.css';

export class CardMessage extends React.Component {
  render() {
    return (
      <div className="card-message-container">
        <div className="message">
          Eiusmod ut do labore nostrud deserunt consequat ut exercitation aliqua reprehenderit
          proident officia eiusmod.Ex ullamco incididunt eu in sit consequat nulla excepteur fugiat
          elit ipsum. Culpa sint sunt est esse est laborum velit anim voluptate magna do id veniam
          Lorem. Ut irure labore laboris est. Non eu eiusmod eu in. Quis aute labore veniam eu
          occaecat Lorem eu culpa aliquip elit Lorem magna do.
        </div>
        <div className="card-email-container">
          <p>example@gmail.com</p>
          <hr />
          <p>example@gmail.com</p>
          <hr />
          <p>example@gmail.com</p>
          <hr />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  message: state.message
});

export default connect(mapStateToProps)(CardMessage);
