import { API_BASE_URL } from '../config';

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
  console.log('loginUser action fired');
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
    .then(resJSON => console.log(resJSON));
};
