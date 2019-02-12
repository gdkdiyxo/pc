import React from 'react';
import { connect } from 'react-redux';

import { setImage } from '../../actions/card';
import './image-form.css';

export class ImageForm extends React.Component {
  searchImage(e) {
    e.preventDefault();
    const page = 1;
    const per_page = 1;
    const query = this.searchInput.value;
    console.log(query);
    const unsplashAuth =
      'Client-ID 72f712e5e78353fa3a7bb238edf115fdb80e04120f85d42b48f85ffb5e849cca';
    let url = `https://api.unsplash.com/search/photos?page=${page}&per_page=${per_page}&query=${query}`;
    console.log(url);
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
        console.log(data.results[0].urls.full);
        const image = { full: data.results[0].urls.regular, alt: 'this is the alt' };
        this.props.dispatch(setImage(image));
      });
  }

  uploadImage() {}

  render() {
    return (
      <div className="search-form-wrapper">
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
          <p>Or, you can upload one of your own</p>
          <button>Upload image</button>
        </form>
      </div>
    );
  }
}

export default connect()(ImageForm);
