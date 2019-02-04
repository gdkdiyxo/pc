import React from "react";

import { unsplashAuth } from "..env";
export default class DesignWindow extends React.Component {
  loadImage() {
    const page = 1;
    const query = "cats";
    fetch(
      `https://api.unsplash.com/search/photos?page=${page}&query=${query}`,
      {
        headers: {
          "Content-Tyope": "application/JSON",
          "Accept-Version": "v1",
          Authorization: `${unsplashAuth}`
        }
      }
    )
      .then(response => response.json)
      .then(data => console.log(data));
  }

  render() {
    return (
      <section className="design-container">
        <div className="design">
          <p>Image</p>
        </div>
        <div className="design-controls">
          <button type="submit" className="flip-image-button">
            flip
          </button>
        </div>
        <p className="photo-credit">
          Compliments of www.unsplash.com
          <br />
          Photo credit: <a href="www.unsplash.com">[photographer]</a>
        </p>
      </section>
    );
  }
}
