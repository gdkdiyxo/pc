import { API_BASE_URL } from '../config';
import { fetchRequest, fetchSuccess } from './auth';

const demoAuthToken =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Il9pZCI6IjVjNmUzMmJhN2M3ZTI5NjhmNzFmNzhhOCIsInVzZXJuYW1lIjoiZGVtb3VzZXIiLCJwYXNzd29yZCI6IiQyYSQxMCRuN1U0V3pMUHhZdnhFQWlpRk9QWUxPOGNjVkdxQW9FejIuUkpOTnBLY2kxZ0phbUExakJhaSIsIm5hbWUiOiJEZW1vVXNlciIsIl9fdiI6MH0sImlhdCI6MTU1MDcyNjAwMCwiZXhwIjoxNTUxMzMwODAwLCJzdWIiOiJkZW1vdXNlciJ9.rZhZBd4jXgs-6GfAQKqaHuSM3fkEjXCzG4c80H9j7yU';

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
export const setCard = card => ({
  type: SET_CARD,
  card
});

export const SET_EDITING = 'SET_EDITING';
export const setEditing = boolean => ({
  type: SET_EDITING,
  boolean
});

export const CLEAR_CARD = 'CLEAR_CARD';
export const clearCard = () => ({
  type: CLEAR_CARD
});

//    User CRUD operations    //
export const fetchCards = () => dispatch => {
  dispatch(fetchRequest());
  fetch(`${API_BASE_URL}/api/cards`, {
    method: 'GET',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('authToken')}`
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
    })
    .then(() => dispatch(fetchSuccess()))
    .catch(err => console.log(err));
};

export const saveCard = currentCard => dispatch => {
  const authToken =
    localStorage.getItem('authToken') !== null ? localStorage.getItem('authToken') : demoAuthToken;
  console.log(currentCard);
  dispatch(fetchRequest());
  fetch(`${API_BASE_URL}/api/cards`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${authToken}`
    },
    body: JSON.stringify(currentCard)
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(card => {
      dispatch(setCard(card));
      dispatch(fetchCards());
    })
    .then(() => {
      dispatch(fetchSuccess());
    })
    .catch(err => console.log(err));
};

export const updateCard = currentCard => dispatch => {
  console.log('updateCard action fired');
  dispatch(fetchRequest());
  fetch(`${API_BASE_URL}/api/cards/${currentCard.cardId}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('authToken')}`
    },
    body: JSON.stringify(currentCard)
  })
    .then(() => dispatch(fetchCards()))

    .catch(err => console.log(err));
};

export const deleteCard = cardId => dispatch => {
  dispatch(fetchRequest());
  fetch(`${API_BASE_URL}/api/cards/${cardId}`, {
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
    })
    .then(() => dispatch(fetchCards()))
    .catch(err => console.log(err));
};
