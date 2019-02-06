import React from 'react';

import './design-window.css';

export default class DesignWindow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: []
    };
    this.designContainer = React.createRef();
  }
  loadImage(e) {
    e.preventDefault();
    const page = 1;
    const per_page = 1;
    const query = 'cats';
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
      .then(data => console.log(data.results[0]));
    // console.log(data.results[0].urls.small);
    // this.setState({ image: data.results[0].urls.small });
    // });
  }

  flipImage(e) {
    e.preventDefault();
    // this.designContainer(addClass("small"));
  }

  render() {
    return (
      <section className="design-container" ref={this.designContainer}>
        <div className="design-container-inner" ref={this.designContainerInner}>
          <div className="postcard-image-container">
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

            <p className="photo-credit">
              Compliments of www.unsplash.com
              <br />
              Photo credit: <a href="www.unsplash.com">[photographer]</a>
            </p>
          </div>
          <div className="postcard-message-container">
            <h3>Hello</h3>
          </div>
        </div>
      </section>
    );
  }
}
