import React from 'react';
import CardImage from './card-image';
import CardMessage from './card-message';
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
          <CardImage />
          <CardMessage />
        </div>
      </section>
    );
  }
}
