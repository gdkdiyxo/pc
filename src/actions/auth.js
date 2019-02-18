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
  localStorage.setItem('authToken', authToken);
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
    .then(res => {
      if (!res.ok) {
        return Promise.reject(res.statusText);
      }
      return res.json();
    })
    .then(({ authToken }) => handleAuthToken(authToken, dispatch))
    .catch(err => console.log(err));
};

export const signupUser = values => dispatch => {
  // dispatch(fetchRequest());
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
      return Promise.resolve(res.json());
    })
    // .then(resJSON => {
    //   console.log(resJSON);
    //   // dispatch(fetchSuccess());
    //   let aPromise = new Promise();
    //   setTimeout(function() {
    //     aPromise.resolve();
    //   }, 10);
    //   return aPromise;
    // })
    .catch(err => console.log(err));
};
