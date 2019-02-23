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

export const SET_AUTH_ERROR = 'SET_AUTH_ERROR';
export const setAuthError = error => ({
  type: SET_AUTH_ERROR,
  error
});

export const handleAuthToken = (authToken, dispatch) => {
  localStorage.setItem('authToken', authToken);
  const decodedToken = jwtDecode(authToken);
  dispatch(setUser(decodedToken.user.username));
};

export const handleRefresh = () => dispatch => {
  const authToken = localStorage.getItem('authToken');
  if (!authToken) {
    return;
  }
  const decodedToken = jwtDecode(authToken);
  dispatch(setUser(decodedToken.user.username));
};

export const logoutUser = () => dispatch => {
  localStorage.clear();
  dispatch(setUser(null));
};

export const loginUser = (username, password) => dispatch => {
  dispatch(fetchRequest());
  fetch(`${API_BASE_URL}/api/login`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify({
      username: username.toLowerCase(),
      password
    })
  })
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(({ authToken }) => handleAuthToken(authToken, dispatch))
    .then(() => dispatch(fetchSuccess()))
    .catch(err => console.log(err));
};

export const signupUser = values => dispatch => {
  // let username
  let { name, username, password } = values;
  username = username.toLowerCase();
  dispatch(fetchRequest());
  fetch(`${API_BASE_URL}/api/signup`, {
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
    .then(res => {
      if (res.status !== 200) {
        res.json().then(body => {
          console.log(body.message);
          dispatch(setAuthError(body.message));
        });
      }
      if (!res.ok) {
        return Promise.reject(res);
      }
      return Promise.resolve(res.json());
    })
    .then(() => dispatch(loginUser(username, password)))
    .then(() => dispatch(fetchSuccess()))
    .catch(err => console.log(err));
};
