import React from 'react';
import './card-front.css';
import { connect } from 'react-redux';

export class CardFront extends React.Component {
  render() {
    return (
      <div className="card-image-container">
        <p className="card-flip-instruction">Click image to flip</p>

        <img src={this.props.image.full} alt={this.props.image.alt} />

        {/* <button type="submit" className="last-image-btn" onClick={e => this.loadNextImage(e)}>
          <i className="fas fa-7x fa-angle-left" />
        </button>

        <button type="submit" className="next-image-btn" onClick={e => this.loadNextImage(e)}>
          <i className="fas fa-7x fa-angle-right" />
        </button>

        <button type="submit" className="flip-image-btn" onClick={e => this.flipImage(e)}>
          <i className="fas fa-7x fa-sync" />
        </button> */}
        <p className="photo-credit">
          www.unsplash.com Photo credit: <a href="www.unsplash.com">[photographer]</a>
        </p>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  image: state.card.image
});

export default connect(mapStateToProps)(CardFront);
