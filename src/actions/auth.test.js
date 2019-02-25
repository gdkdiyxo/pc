import {
  SET_USER,
  setUser,
  FETCH_SUCCESS,
  fetchSuccess,
  FETCH_REQUEST,
  fetchRequest,
  SET_AUTH_ERROR,
  setAuthError
} from './auth';

describe('setUser', () => {
  it('should return the action', () => {
    const username = 'randomuser5';
    const action = setUser(username);
    expect(action.type).toEqual(SET_USER);
    expect(action.username).toEqual(username);
  });
});

describe('fetchSuccess', () => {
  it('should return the action', () => {
    const action = fetchSuccess();
    expect(action.type).toEqual(FETCH_SUCCESS);
  });
});

describe('fetchRequest', () => {
  it('should return the action', () => {
    const action = fetchRequest();
    expect(action.type).toEqual(FETCH_REQUEST);
  });
});

describe('setAuthError', () => {
  it('should return the action', () => {
    const error = 'example error';
    const action = setAuthError(error);
    expect(action.type).toEqual(SET_AUTH_ERROR);
    expect(action.error).toEqual(error);
  });
});
