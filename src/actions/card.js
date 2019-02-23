import { API_BASE_URL, UNSPLASH_AUTH, DEMO_AUTH_TOKEN } from '../config';
import { fetchRequest, fetchSuccess } from './auth';

export const SET_RESULTS = 'SET_RESULTS';
export const setResults = results => ({
  type: SET_RESULTS,
  results
});

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

export const SET_ERROR = 'SET_ERROR';
export const setError = error => ({
  type: SET_ERROR,
  error
});

//    www.unsplash.com API    //
//default page is 1 (this could maybe be randomized to get more images)
//max per page is 30
export const searchImage = query => dispatch => {
  const page = 1;
  const per_page = 30;
  const orientation = 'landscape';
  let url = `https://api.unsplash.com/search/photos?page=${page}&per_page=${per_page}&orientation=${orientation}&query=${query}`;
  fetch(`${url}`, {
    headers: {
      method: 'GET',
      'Content-Type': 'application/JSON',
      'Accept-Version': 'v1',
      Authorization: `${UNSPLASH_AUTH}`
    }
  })
    .then(response => response.json())
    .then(data => {
      if (data.total === 0) {
        dispatch(setError('There were no results. Try a different search'));
      } else {
        dispatch(setError(''));
        dispatch(setResults(data.results));
        const randomResult = Math.floor(Math.random() * Math.min(data.total, page * per_page));
        const randomImage = data.results[randomResult];
        const image = {
          full: randomImage.urls.regular,
          thumb: randomImage.urls.thumb,
          alt: randomImage.description,
          credit: randomImage.user.name,
          portfolio: randomImage.user.links.html
        };
        dispatch(setImage(image));
      }
    });
};

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
    localStorage.getItem('authToken') !== null
      ? localStorage.getItem('authToken')
      : DEMO_AUTH_TOKEN;
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
