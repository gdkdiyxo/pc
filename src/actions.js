export const FLIP_CARD = 'FLIP_CARD';
export const flipCard = () => ({
  type: FLIP_CARD
});

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const addMessage = message => ({
  type: ADD_MESSAGE,
  message
});

export const ADD_RECIPIENTS = 'ADD_RECIPIENTS';
export const addRecipients = recipients => ({
  type: ADD_RECIPIENTS,
  recipients
});
