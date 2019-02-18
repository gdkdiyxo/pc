import { API_BASE_URL } from '../config';
import jwtDecode from 'jwt-decode';

export const SET_USER = 'SET_USER';
export const setUser = username => ({
  type: SET_USER,
  username
});

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const fetchRequest = () => ({
  type: FETCH_REQUEST
});

export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const fetchSuccess = () => ({
  type: FETCH_SUCCESS
});

export const handleAuthToken = (authToken, dispatch) => {
  console.log(authToken);
  localStorage.setItem('authToken', authToken);
  const localStorageWorked = localStorage.getItem('authToken');
  console.log(localStorageWorked);
  const decodedToken = jwtDecode(authToken);
  dispatch(setUser(decodedToken.user.username));
};

export const loginUser = (username, password) => dispatch => {
  return fetch(`${API_BASE_URL}/api/login`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      username,
      password
    })
  })
    .then(res => res.json())
    .then(({ authToken }) => handleAuthToken(authToken, dispatch))
    .catch(err => console.log(err));
};

export const signupUser = values => dispatch => {
  dispatch(fetchRequest());
  fetch(`${API_BASE_URL}/api/signup`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(values)
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(resJSON => {
      console.log(resJSON);
      dispatch(fetchSuccess());
    })
    .catch(err => console.log(err));
};
