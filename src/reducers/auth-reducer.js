import { SET_USER, FETCH_SUCCESS, FETCH_REQUEST, SET_AUTH_ERROR } from '../actions/auth';

const initialState = {
  currentUser: null,
  loading: false,
  error: null
};

export default function reducer(state = initialState, action) {
  if (action.type === SET_USER) {
    return Object.assign({}, state, {
      currentUser: action.username
    });
  } else if (action.type === FETCH_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    });
  } else if (action.type === FETCH_SUCCESS) {
    return Object.assign({}, state, {
      loading: false
    });
  } else if (action.type === SET_AUTH_ERROR) {
    return Object.assign({}, state, {
      error: action.error
    });
  }
  return state;
}
