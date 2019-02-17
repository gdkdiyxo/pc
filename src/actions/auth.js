import { API_BASE_URL } from '../config';
import jwtDecode from 'jwt-decode';

export const SET_USER = 'SET_USER';
export const setUser = username => ({
  type: SET_USER,
  username
});

export const handleAuthToken = (authToken, dispatch) => {
  localStorage.setItem('authToken', authToken);
  const decodedToken = jwtDecode(authToken);
  console.log(decodedToken);
  dispatch(setUser(decodedToken.user.username));
};

export const loginUser = (username, password) => dispatch => {
  return fetch(`${API_BASE_URL}/login`, {
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
  console.log(`${API_BASE_URL}/signup`);
  fetch(`${API_BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(values)
  })
    .then(res => res.json())
    .then(resJSON => console.log(resJSON))
    .catch(err => console.log(err));
};
