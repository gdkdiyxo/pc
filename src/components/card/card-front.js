import React from 'react';
import './card-front.css';
import { connect } from 'react-redux';

import { setImage } from '../../actions/card';
import '../create-page/image-form.css';

export function ImageForm(props) {
  return (
    <div className="image-form-wrapper">
      <form onSubmit={e => props.onSubmit(e)}>
        <label htmlFor="search">1) Search for an image</label>
        <div className="image-form-row">
          <input
            id="search"
            placeholder="search for anything"
            ref={input => (this.searchInput = input)}
          />
          <button type="submit">Search</button>
        </div>
      </form>
    </div>
  );
}

export class CardFront extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalShowing: false
    };
  }

  searchImage(e) {
    e.preventDefault();
    const page = 1;
    const per_page = 1;
    const query = this.searchInput.value;
    const unsplashAuth =
      'Client-ID 72f712e5e78353fa3a7bb238edf115fdb80e04120f85d42b48f85ffb5e849cca';
    let url = `https://api.unsplash.com/search/photos?page=${page}&per_page=${per_page}&query=${query}`;
    fetch(`${url}`, {
      headers: {
        method: 'GET',
        'Content-Type': 'application/JSON',
        'Accept-Version': 'v1',
        Authorization: `${unsplashAuth}`
      }
    })
      .then(response => response.json())
      .then(data => {
        const image = { full: data.results[0].urls.regular, alt: 'this is the alt' };
        this.props.dispatch(setImage(image));
      });
  }

  showImageModal(e) {
    e.stopPropagation();
    console.log('showImageModal clicked');
    this.setState({
      isModalShowing: !this.state.isModalShowing
    });
  }

  render() {
    return (
      <div className="card-image-container">
        <p className="card-flip-instruction">Click image to flip</p>
        <button className="add-image-btn" onClick={e => this.showImageModal(e)}>
          Add Image
        </button>
        <img src={this.props.image.full} alt={this.props.image.alt} />
        {/* <ImageForm isOpen={false} onSubmit={value => this.searchImage(value)} /> */}
        <div className="image-form-wrapper" id={!this.state.isModalShowing ? 'hidden' : ''}>
          <form onSubmit={e => this.onSubmit(e)}>
            <label htmlFor="search">1) Search for an image</label>
            <div className="image-form-row">
              <input
                id="search"
                placeholder="search for anything"
                ref={input => (this.searchInput = input)}
              />
              <button type="submit">Search</button>
            </div>
          </form>
        </div>
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
