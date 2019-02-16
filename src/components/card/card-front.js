import React from 'react';
import './card-front.css';
import { connect } from 'react-redux';

export class CardFront extends React.Component {
  render() {
    return (
      <div className="card-image-container">
        <p className="card-flip-instruction">Click image to flip</p>

        <img src={this.props.image.full} alt={this.props.image.alt} />

        {/* <button className="last-image-btn" onClick={e => this.loadNextImage(e)}>
          <i className="fas fa-7x fa-angle-left" />
        </button>

        <button  className="next-image-btn" onClick={e => this.loadNextImage(e)}>
          <i className="fas fa-7x fa-angle-right" />
        </button>

        <button  className="flip-image-btn" onClick={e => this.flipImage(e)}>
          <i className="fas fa-7x fa-sync" />
        </button> */}
        <p className="photo-credit">
          Photo credit:{' '}
          <a
            href={`${this.props.image.portfolio}?utm_source=Deltio&utm_medium=referral`}
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.props.image.credit}
          </a>{' '}
          on{' '}
          <a href="http://www.unsplash.com" target="_blank" rel="noopener noreferrer">
            Unsplash
          </a>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  image: state.card.image
});

export default connect(mapStateToProps)(CardFront);
