import React from "react";

// import { unsplashAuth } from "./secrets";
export default class DesignWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: []
    };
  }
  loadImage(e) {
    e.preventDefault();
    const page = 1;
    const per_page = 1;
    const query = "cats";
    const unsplashAuth =
      "Client-ID 72f712e5e78353fa3a7bb238edf115fdb80e04120f85d42b48f85ffb5e849cca";
    let url = `https://api.unsplash.com/search/photos?page=${page}&per_page=${per_page}&query=${query}`;
    console.log(url);
    fetch(`${url}`, {
      headers: {
        method: "GET",
        "Content-Type": "application/JSON",
        "Accept-Version": "v1",
        Authorization: `${unsplashAuth}`
      }
    })
      .then(response => response.json())
      .then(data => console.log(data.results[0]));
    // console.log(data.results[0].urls.small);
    // this.setState({ image: data.results[0].urls.small });
    // });
  }

  render() {
    return (
      <section className="design-container">
        <div className="design">
          <img src={this.state.image} alt="this is the alt text" />
        </div>
        <div className="design-controls">
          <button
            type="submit"
            className="flip-image-button"
            onClick={e => this.loadImage(e)}
          >
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
