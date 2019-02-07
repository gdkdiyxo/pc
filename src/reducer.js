import { FLIP_CARD, ADD_MESSAGE, ADD_RECIPIENTS } from './actions';

const initialState = {
  userAuth: false,
  message:
    'Eiusmod ut do labore nostrud deserunt consequat ut exercitation aliqua reprehenderit proident officia eiusmod.Ex ullamco incididunt eu in sit consequat nulla excepteur fugiat elit ipsum. Culpa sint sunt est esse est laborum velit anim voluptate magna do id veniam Lorem. Ut irure labore laboris est. Non eu eiusmod eu in. Quis aute labore veniam eu occaecat Lorem eu culpa aliquip elit Lorem magna do.',
  recipients: ['example1@gmail.com', 'example2@gmail.com', 'example3@gmail.com'],
  cardIsFlipped: false,
  cardIsEditing: false
};

export default (state = initialState, action) => {
  if (action.type === FLIP_CARD) {
    return Object.assign({}, state, {
      cardIsFlipped: true
    });
  } else if (action.type === ADD_MESSAGE) {
    return Object.assign({}, state, {
      message: action.message
    });
  } else if (action.type === ADD_RECIPIENTS) {
    return Object.assign({}, state, {
      recipients: [...state.recipients, action.recipients]
    });
  }

  return state;
};
