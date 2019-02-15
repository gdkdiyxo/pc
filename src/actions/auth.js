import { API_BASE_URL } from '../config';

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
    .then(resJSON => console.log(resJSON));
};

export const signupUser = (name, username, password) => dispatch => {
  console.log('signup action fired');
  fetch(`${API_BASE_URL}/auth/signup`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      name,
      username,
      password
    })
  })
    .then(res => res.json())
    .then(resJSON => console.log(resJSON))
    .catch(err => console.log(err));
};
