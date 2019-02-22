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
    const cardClass = this.props.card.isCardFlipped ? 'card-back' : 'card-front';

    return (
      <main role="main">
        <section card={this.props.card} className="card-outer" onClick={e => this.flipCard(e)}>
          <div className={cardClass}>
            <Card
              image={this.props.card.image}
              message={this.props.card.message}
              recipients={this.props.card.recipients}
            />
          </div>
        </section>
        <div className="card-btn-wrapper">
          <Link to="/create">
            <button className="create-page-btn">Back</button>
          </Link>
        </div>
      </main>
    );
  }
}

const mapStateToProps = state => ({
  card: state.card
});

export default connect(mapStateToProps)(Preview);
