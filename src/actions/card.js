import { API_BASE_URL } from '../config';
import { fetchRequest, fetchSuccess } from './auth';

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

export const SET_CARD = 'SET_CARD';
export const setCard = id => ({
  type: SET_CARD,
  id
});

export const SET_EDITING = 'SET_EDITING';
export const setEditing = boolean => ({
  type: SET_EDITING,
  boolean
});

export const fetchCards = () => dispatch => {
  dispatch(fetchRequest());
  console.log(localStorage.getItem('authToken'));

  fetch(`${API_BASE_URL}/api/cards`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      // Authorization: `Bearer ${localStorage.getItem('authToken')}`
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVjNjkwYWZiYzUzMzdhNDBiN2FmMmRiMiIsInVzZXJuYW1lIjoidGVzdHVzZXIiLCJwYXNzd29yZCI6IiQyYSQxMCRFMnp4OWVucmtMNkV5Y0FrLlMzYS51cDFhOXVtaDRmZVU4S1E2am1ZNVM5Y0ZXdklaMi8uNiIsIm5hbWUiOiJEZW1vIFVzZXIiLCJfX3YiOjB9LCJpYXQiOjE1NTAzODgxODIsImV4cCI6MTU1MDk5Mjk4Miwic3ViIjoidGVzdHVzZXIifQ.YTx9wKhDJsnY1zrhXijwMR2vcyyuUfB46tT-628GHyw'
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

export const saveCard = currentCard => dispatch => {
  fetch(`${API_BASE_URL}/api/cards`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      // Authorization: `Bearer ${localStorage.getItem('authToken')}`
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVjNjkwYWZiYzUzMzdhNDBiN2FmMmRiMiIsInVzZXJuYW1lIjoidGVzdHVzZXIiLCJwYXNzd29yZCI6IiQyYSQxMCRFMnp4OWVucmtMNkV5Y0FrLlMzYS51cDFhOXVtaDRmZVU4S1E2am1ZNVM5Y0ZXdklaMi8uNiIsIm5hbWUiOiJEZW1vIFVzZXIiLCJfX3YiOjB9LCJpYXQiOjE1NTAzODgxODIsImV4cCI6MTU1MDk5Mjk4Miwic3ViIjoidGVzdHVzZXIifQ.YTx9wKhDJsnY1zrhXijwMR2vcyyuUfB46tT-628GHyw'
    },
    body: JSON.stringify(currentCard)
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      res.json();
    })
    .then(dispatch(fetchCards()))
    .catch(err => console.log(err));
};

export const updateCard = (id, currentCard) => dispatch => {
  console.log(id, currentCard);
  fetch(`${API_BASE_URL}/api/cards/${id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      // Authorization: `Bearer ${localStorage.getItem('authToken')}`
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVjNjkwYWZiYzUzMzdhNDBiN2FmMmRiMiIsInVzZXJuYW1lIjoidGVzdHVzZXIiLCJwYXNzd29yZCI6IiQyYSQxMCRFMnp4OWVucmtMNkV5Y0FrLlMzYS51cDFhOXVtaDRmZVU4S1E2am1ZNVM5Y0ZXdklaMi8uNiIsIm5hbWUiOiJEZW1vIFVzZXIiLCJfX3YiOjB9LCJpYXQiOjE1NTAzODgxODIsImV4cCI6MTU1MDk5Mjk4Miwic3ViIjoidGVzdHVzZXIifQ.YTx9wKhDJsnY1zrhXijwMR2vcyyuUfB46tT-628GHyw'
    },
    body: JSON.stringify(currentCard)
  })
    .then(dispatch(fetchCards()))
    .catch(err => console.log(err));
};

export const deleteCard = id => dispatch => {
  fetch(`${API_BASE_URL}/api/cards/${id}`, {
    method: 'DELETE',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('authToken')}`
    }
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      dispatch(fetchCards());
    })
    .catch(err => console.log(err));
};
