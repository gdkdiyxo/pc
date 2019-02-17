import { API_BASE_URL } from '../config';

export const SET_USER = 'SET_USER';
export const setUser = username => ({
  type: SET_USER,
  username
});

export const saveAuthToken = authToken => {
  localStorage.setItem('authToken', authToken);
};

export const LOGOUT_USER = 'LOGOUT_USER';
export const logoutUser = () => ({
  type: LOGOUT_USER
});

export const loginUser = (username, password) => dispatch => {
  console.log(`loginUser action fired; username: ${username} password: ${password}`);
  console.log(API_BASE_URL);
  return fetch(`${API_BASE_URL}/auth/login`, {
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
    .then(authToken => dispatch(saveAuthToken(authToken)))
    .catch(err => console.log(err));
};

export const signupUser = values => dispatch => {
  console.log(values);
  fetch(`${API_BASE_URL}/auth/signup`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      values
    })
  })
    .then(res => res.json())
    .then(resJSON => console.log(resJSON))
    .catch(err => console.log(err));
};
