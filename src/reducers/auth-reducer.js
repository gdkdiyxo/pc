import { SET_USER } from '../actions/auth';

const initialState = {
  currentUser: null
};

export default function reducer(state = initialState, action) {
  if (action.type === SET_USER) {
    console.log(`currentUser: ${action.username}`);
    return Object.assign({}, state, {
      currentUser: action.username
    });
  }
  return state;
}
