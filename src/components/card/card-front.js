import React from 'react';

export default class CardFront extends React.Component {
  render() {
    return (
      <div className="card-image-container">
        <p className="card-flip-instruction">Click to flip postcard</p>

        <img src={this.props.image.full} alt={this.props.image.alt} />
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
