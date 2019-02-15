import React from 'react';
import { connect } from 'react-redux';

import { setImage } from '../../actions/card';
import './image-form.css';

export class ImageForm extends React.Component {
  searchImage(e) {
    e.preventDefault();
    const page = 1;
    const per_page = 10;
    const orientation = 'landscape';
    const query = this.searchInput.value;
    const unsplashAuth =
      'Client-ID 72f712e5e78353fa3a7bb238edf115fdb80e04120f85d42b48f85ffb5e849cca';
    let url = `https://api.unsplash.com/search/photos?page=${page}&per_page=${per_page}&orientation=${orientation}&query=${query}`;
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
        const image = {
          full: data.results[1].urls.regular,
          alt: data.results[1].description,
          credit: data.results[1].user.name,
          portfolio: data.results[1].user.links.html
        };
        this.props.dispatch(setImage(image));
      });
  }

  uploadImage() {}

  render() {
    return (
      <div className="image-form-wrapper">
        <form onSubmit={e => this.searchImage(e)}>
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
}

export default connect()(ImageForm);
