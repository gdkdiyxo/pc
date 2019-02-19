import React from 'react';
import { connect } from 'react-redux';
import { fetchCards, setCard, setEditing, deleteCard } from '../../actions/card';

function ConfirmDeleteModal(props) {
  const hidden = { display: 'none' };
  return (
    <div className="delete-card-modal" style={!props.showing ? hidden : null}>
      <p>Are you sure you want to delete this postcard?</p>
      <button className="modal-cancel-btn" onClick={e => props.toggleModal(e, false)}>
        Cancel
      </button>
      <button className="modal-delete-btn" onClick={e => props.deleteCard(e, props.cardId)}>
        Delete
      </button>
    </div>
  );
}

export class UserCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: false,
      cardId: ''
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchCards());
  }

  toggleModal(event, showing, cardId) {
    event.stopPropagation();
    this.setState({
      showing,
      cardId
    });
  }

  setCardToUpdate(event, cardId) {
    this.props.dispatch(setCard(cardId));
    this.props.dispatch(setEditing(true));
  }

  deleteCard(event, cardId) {
    event.preventDefault();
    this.props.dispatch(deleteCard(cardId));
    this.toggleModal(event, false);
  }

  render() {
    if (this.props.loading) {
      return (
        <div>
          <p>Loading cards</p>
        </div>
      );
    }
    if (this.props.userCards.length === 0) {
      return <p className="collection-message">You don't have any saved cards yet</p>;
    }
    const userCards = this.props.userCards.map(card => (
      <div
        className="saved-card"
        key={card._id}
        ref={cardId => (this.cardId = cardId)}
        onClick={e => this.setCardToUpdate(e, card._id)}
      >
        <p className="saved-card-edit-instruction">Click to edit</p>
        <button className="delete-card-btn" onClick={e => this.toggleModal(e, true, card._id)}>
          <i className="fa fa-trash" />
        </button>
        <img src={card.image.thumb} alt={card.image.alt} />
      </div>
    ));

    return (
      <div>
        <section className="collection-cards">{userCards}</section>
        <ConfirmDeleteModal
          showing={this.state.showing}
          toggleModal={e => this.toggleModal(e)}
          cardId={this.state.cardId}
          deleteCard={(e, cardId) => this.deleteCard(e, cardId)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userCards: state.card.userCards,
  loading: state.card.loading,
  card: state.card
});

export default connect(mapStateToProps)(UserCards);
