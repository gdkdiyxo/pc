import { API_BASE_URL } from '../config';

export const SET_IMAGE = 'SET_IMAGE';
export const setImage = image => ({
  type: SET_IMAGE,
  image
});

export const FLIP_CARD = 'FLIP_CARD';
export const flipCard = () => ({
  type: FLIP_CARD
});

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const addMessage = message => ({
  type: ADD_MESSAGE,
  message
});

export const ADD_RECIPIENT = 'ADD_RECIPIENT';
export const addRecipient = recipient => ({
  type: ADD_RECIPIENT,
  recipient
});

export const DELETE_EMAIL = 'DELETE_EMAIL';
export const deleteEmail = index => ({
  type: DELETE_EMAIL,
  index
});

export const CLEAR_RECIPIENTS = 'CLEAR_RECIPIENTS';
export const clearRecipients = () => ({
  type: CLEAR_RECIPIENTS
});

export const DISPLAY_CARDS = 'DISPLAY_CARDS';
export const displayCards = userCards => ({
  type: DISPLAY_CARDS,
  userCards
});

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const fetchRequest = () => ({
  type: FETCH_REQUEST
});

export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const fetchSuccess = () => ({
  type: FETCH_SUCCESS
});

export const saveCard = currentCard => dispatch => {
  fetch(`${API_BASE_URL}/cards`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({ currentCard })
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      res.json();
    })
    .then(resJSON => console.log(resJSON))
    .catch(err => console.log(err));
};

export const fetchCards = () => dispatch => {
  dispatch(fetchRequest());
  fetch(`${API_BASE_URL}/cards`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(userCards => {
      dispatch(displayCards(userCards));
      dispatch(fetchSuccess());
    });
};
