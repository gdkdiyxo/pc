import authReducer from './auth-reducer';
import { setUser, fetchSuccess, fetchRequest, setAuthError } from '../actions/auth';

describe('authReducer', () => {
  const username = 'testuser';
  const error = 'failed to fetch';

  it('should set the initial state', () => {
    const state = authReducer(undefined, { type: '__UNKNOWN' });
    expect(state).toEqual({
      currentUser: null,
      loading: false,
      error: null
    });
  });

  describe('setUser', () => {
    it('should update state with the current user', () => {
      let state;
      state = authReducer(state, setUser(username));
      expect(state.currentUser).toEqual(username);
    });
  });

  describe('fetchRequest', () => {
    it('should update the state loading status', () => {
      let state;
      state = authReducer(state, fetchRequest());
      expect(state.loading).toEqual(true);
    });
  });

  describe('fetchSuccess', () => {
    it('should update the state loading status', () => {
      let state;
      state = authReducer(state, fetchSuccess());
      expect(state.loading).toEqual(false);
    });
  });

  describe('setAuthError', () => {
    it('should set the state error to current error', () => {
      let state;
      state = authReducer(state, setAuthError(error));
      expect(state.error).toEqual(error);
    });
  });
});
