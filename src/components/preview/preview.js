import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Card from '../create/card';
import { flipCard } from '../../actions/card';

export class Preview extends React.Component {
  flipCard() {
    this.props.dispatch(flipCard());
  }

  render() {
    //move this into .css file
    const style = { display: 'block', margin: '10px auto' };
    const cardClass = this.props.isCardFlipped ? 'card-back' : 'card-front';

    return (
      <main role="main">
        {this.props.history ? (
          <Link to="/create">
            <button style={style} className="create-page-btn">
              Back
            </button>
          </Link>
        ) : null}
        <section card={this.props.card} className="card-outer" onClick={e => this.flipCard(e)}>
          <div className={cardClass}>
            <Card
              image={this.props.card.image}
              message={this.props.card.message}
              recipients={this.props.card.recipients}
            />
          </div>
        </section>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  card: state.card,
  isCardFlipped: state.card.isCardFlipped,
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(Preview);
