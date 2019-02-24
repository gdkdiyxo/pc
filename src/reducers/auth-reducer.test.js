import authReducer from './auth-reducer';
import { setUser, fetchSuccess, fetchRequest, setAuthError } from '../actions/auth';

describe('authReducer', () => {
  const username = 'testuser';

  it('should set the initial state', () => {
    const state = authReducer(undefined, { type: '__UNKNOWN' });
    expect(state).toEqual({
      currentUser: null,
      loading: false,
      error: null
    });
  });
});
