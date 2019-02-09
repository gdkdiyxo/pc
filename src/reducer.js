import {
  FLIP_CARD,
  ADD_MESSAGE,
  ADD_RECIPIENT,
  FEEL_RECIPIENT_FORM,
  CLEAR_RECIPIENTS
} from './actions';

const initialState = {
  userAuth: false,
  message:
    'Eiusmod ut do labore nostrud deserunt consequat ut exercitation aliqua reprehenderit proident officia eiusmod.Ex ullamco incididunt eu in sit consequat nulla excepteur fugiat elit ipsum. Culpa sint sunt est esse est laborum velit anim voluptate magna do id veniam Lorem. Ut irure labore laboris est. Non eu eiusmod eu in. Quis aute labore veniam eu occaecat Lorem eu culpa aliquip elit Lorem magna do.',
  recipients: ['example1@gmail.com', 'example2@yahoo.com', 'example3@aol.com'],
  isCardFlipped: false,
  recipientFormTouched: false,
  isCardEditing: false
};

export default (state = initialState, action) => {
  if (action.type === FLIP_CARD) {
    return Object.assign({}, state, {
      isCardFlipped: !state.isCardFlipped
    });
  } else if (action.type === ADD_MESSAGE) {
    return Object.assign({}, state, {
      message: action.message
    });
  } else if (action.type === FEEL_RECIPIENT_FORM) {
    console.log('recipientFormTouched ran');
    return Object.assign({}, state, {
      recipientFormTouched: true
    });
  } else if (action.type === CLEAR_RECIPIENTS) {
    return Object.assign({}, state, {
      recipients: []
    });
  } else if (action.type === ADD_RECIPIENT) {
    return Object.assign({}, state, {
      recipients: [...state.recipients, action.recipient]
    });
  }

  return state;
};
