import React from 'react';
import { connect } from 'react-redux';
import { fetchCards, setCard, deleteCard } from '../../actions/card';

function ConfirmDeleteModal(props) {
  const hidden = { display: 'none' };
  return (
    <div className="delete-card-modal" style={!props.showing ? hidden : null}>
      <p>Are you sure you want to delete this postcard?</p>
      <button className="modal-cancel-btn" onClick={() => props.toggleModal(false)}>
        Cancel
      </button>
      <button className="modal-delete-btn" onClick={e => props.onClick(e, props.key)}>
        Delete
      </button>
    </div>
  );
}

export class UserCards extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showing: false
    };
  }

  componentDidMount() {
    this.props.dispatch(fetchCards());
  }

  toggleModal(showing) {
    this.setState({
      showing
    });
  }

  setCardToUpdate(event, id) {
    console.log(id);
    this.props.dispatch(setCard(id));
  }

  deleteCard(event, id) {
    event.preventDefault();
    event.stopPropagation();
    console.log('delteCard fired');
    console.log(id);
    this.props.dispatch(deleteCard(this.cardId));
  }

  render() {
    if (this.props.loading) {
      return (
        <div>
          <p>Loading cards</p>
        </div>
      );
    }
    const userCards = this.props.userCards.map(card => (
      <div
        className="saved-card"
        key={card._id}
        ref={key => (this.cardId = key)}
        onClick={e => this.setCardToUpdate(e, card._id)}
      >
        <p className="saved-card-flip-instruction">Click to edit</p>
        <button className="delete-card-btn" onClick={() => this.toggleModal(true)}>
          <i className="fa fa-trash" />
        </button>
        <img src={card.image.thumb} alt={card.image.alt} />
      </div>
    ));

    return (
      <div>
        <section className="saved-cards-container">
          <p className="saved-cards-container-label">My saved postcards</p>
          {userCards}
        </section>
        <ConfirmDeleteModal
          showing={this.state.showing}
          toggleModal={e => this.toggleModal(e)}
          onClick={(e, key) => this.deleteCard(e, key)}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  userCards: state.card.userCards,
  loading: state.card.loading
});

export default connect(mapStateToProps)(UserCards);
