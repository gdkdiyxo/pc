import React from 'react';
import { connect } from 'react-redux';

import { setImage, flipCard, setEditing, searchImage } from '../../actions/card';

export class ImageForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errorMessage: ''
    };
  }

  searchImage(e) {
    e.preventDefault();
    const query = this.searchInput.value;
    this.props.dispatch(searchImage(query));
  }

  render() {
    return (
      <div className="create-page-form-wrapper">
        <form onSubmit={e => this.searchImage(e)}>
          <label htmlFor="search">1) Search for an image</label>
          <div className="create-page-form-row">
            <input
              id="search"
              placeholder="e.g. London, Paris, cat, nature"
              required={true}
              ref={input => (this.searchInput = input)}
            />
            <button type="submit">Search</button>
          </div>
          {/* <div className="error-message" aria-live="assertive">
            {this.state.errorMessage}
          </div> */}
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  cardId: state.card.cardId,
  isCardFlipped: state.card.isCardFlipped,
  editing: state.card.editing
});

export default connect(mapStateToProps)(ImageForm);
