import { SIGNUP_USER, LOGOUT_USER } from '../actions/auth';

const initialState = {
  currentUser: null
};

export default function reducer(state = initialState, action) {
  if (action.type === SIGNUP_USER) {
    console.log('signUp user reducer ran');
    return Object.assign({}, state, {
      currentUser: action.user
    });
  } else if (action.type === LOGOUT_USER) {
    console.log('logout reducer fired');
    return Object.assign({}, state, {
      currentUser: null
    });
  }
  return state;
}
