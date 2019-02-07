import React from 'react';
import './card-front.css';
import { connect } from 'react-redux';

export class CardFront extends React.Component {
  render() {
    return (
      <div className="card-image-container">
        <img
          src="https://images.unsplash.com/photo-1517331156700-3c241d2b4d83?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjU0MzUwfQ"
          alt="Cats in a basket"
        />

        <button type="submit" className="last-image-btn" onClick={e => this.loadNextImage(e)}>
          <i className="fas fa-7x fa-angle-left" />
        </button>

        <button type="submit" className="next-image-btn" onClick={e => this.loadNextImage(e)}>
          <i className="fas fa-7x fa-angle-right" />
        </button>

        <button type="submit" className="flip-image-btn" onClick={e => this.flipImage(e)}>
          <i className="fas fa-7x fa-sync" />
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  image: state.image
});

export default connect(mapStateToProps)(CardFront);
