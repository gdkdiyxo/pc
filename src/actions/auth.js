// import { API_BASE_URL } from '../config';
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:8080/api';

export const SIGNUP_USER = 'SIGNUP_USER';
export const signupUser = user => ({
  type: SIGNUP_USER,
  user
});

export const LOGOUT_USER = 'LOGOUT_USER';
export const logoutUser = () => ({
  type: LOGOUT_USER
});

export const loginUser = (username, password) => dispatch => {
  console.log(`loginUser action fired; username: ${username} password: ${password}`);
  console.log(API_BASE_URL);
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
    .then(resJSON => console.log(resJSON));
};
