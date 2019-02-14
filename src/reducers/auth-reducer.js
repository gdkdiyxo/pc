import { LOGOUT_USER } from '../actions/auth';

const initialState = {
  currentUser: null
};

export default function reducer(state = initialState, action) {
  if (action.type === LOGOUT_USER) {
    console.log('logout reducer fired');
    return Object.assign({}, state, {
      currentUser: null
    });
  }
  return state;
}
