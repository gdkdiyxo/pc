import { flipCard, addMessage, sendCard } from './actions';

const initialState = {
  userAuth: false,
  message: '',
  cardIsFlipped: false,
  cardIsEditing: false
};

export default (state = initialState, action) => {
  if (action.type === addMessage) {
    return Object.assign({}, state, {
      message: action.message
    });
  }
  return state;
};
