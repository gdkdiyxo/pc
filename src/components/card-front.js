import React from 'react';
import './card-front.css';
import { connect } from 'react-redux';

export class CardFront extends React.Component {
  render() {
    return (
      <div className="card-image-container">
        <img src={this.props.image.src} alt={this.props.image.alt} />

        {/* <button type="submit" className="last-image-btn" onClick={e => this.loadNextImage(e)}>
          <i className="fas fa-7x fa-angle-left" />
        </button>

        <button type="submit" className="next-image-btn" onClick={e => this.loadNextImage(e)}>
          <i className="fas fa-7x fa-angle-right" />
        </button>

        <button type="submit" className="flip-image-btn" onClick={e => this.flipImage(e)}>
          <i className="fas fa-7x fa-sync" />
        </button> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  image: state.image
});

export default connect(mapStateToProps)(CardFront);
