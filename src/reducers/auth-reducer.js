import { SET_USER, LOGOUT_USER, SAVE_AUTH_TOKEN } from '../actions/auth';

const initialState = {
  currentUser: null
};

export default function reducer(state = initialState, action) {
  if (action.type === SET_USER) {
    console.log('set_user action fired');
    return Object.assign({}, state, {
      currentUser: action.username
    });
  } else if (action.type === LOGOUT_USER) {
    console.log('logout reducer fired');
    return Object.assign({}, state, {
      currentUser: null
    });
  }
  return state;
}
