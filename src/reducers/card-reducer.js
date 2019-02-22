import {
  FLIP_CARD,
  ADD_MESSAGE,
  ADD_RECIPIENT,
  CLEAR_RECIPIENTS,
  SET_IMAGE,
  DELETE_EMAIL,
  DISPLAY_CARDS,
  SET_CARD,
  SET_EDITING
} from '../actions/card';

const initialState = {
  cardId: null,
  id: null,
  image: {
    full:
      'https://images.unsplash.com/photo-1503970999490-4404449dc349?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjU0MzUwfQ',
    thumb:
      'https://images.unsplash.com/photo-1503970999490-4404449dc349?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjU0MzUwfQ',
    alt: 'Roman Colosseum, Italy under clear sky during golden hour',
    credit: 'Willian West',
    portfolio: 'https://unsplash.com/@willianwest'
  },
  message:
    'Eiusmod ut do labore nostrud deserunt consequat ut exercitation aliqua reprehenderit proident officia eiusmod.Ex ullamco incididunt eu in sit consequat nulla excepteur fugiat elit ipsum. Culpa sint sunt est esse est laborum velit anim voluptate magna do id veniam Lorem. Ut irure labore laboris est. Non eu eiusmod eu in. Quis aute labore veniam eu occaecat Lorem eu culpa aliquip elit Lorem magna do.',
  recipients: [],
  isCardFlipped: false,
  userCards: [],
  editing: false,
  editingId: ''
};

export default function reducer(state = initialState, action) {
  if (action.type === SET_IMAGE) {
    return Object.assign({}, state, {
      image: action.image
    });
  }
  if (action.type === FLIP_CARD) {
    return Object.assign({}, state, {
      isCardFlipped: !state.isCardFlipped
    });
  } else if (action.type === ADD_MESSAGE) {
    return Object.assign({}, state, {
      message: action.message
    });
  } else if (action.type === CLEAR_RECIPIENTS) {
    return Object.assign({}, state, {
      recipients: []
    });
  } else if (action.type === ADD_RECIPIENT) {
    return Object.assign({}, state, {
      recipients: [...state.recipients, action.recipient]
    });
  } else if (action.type === DELETE_EMAIL) {
    return Object.assign({}, state, {
      recipients: state.recipients.filter((recipient, index) => index !== action.index)
    });
  } else if (action.type === DISPLAY_CARDS) {
    return Object.assign({}, state, {
      userCards: action.userCards
    });
  } else if (action.type === SET_CARD) {
    return Object.assign({}, state, {
      cardId: action.card._id,
      image: action.card.image,
      message: action.card.message,
      recipients: action.card.recipients
    });
  } else if (action.type === SET_EDITING) {
    return Object.assign({}, state, {
      editing: action.boolean
    });
  }

  return state;
}
