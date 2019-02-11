export const SIGNUP_USER = 'SIGNUP_USER';
export const signupUser = user => ({
  type: SIGNUP_USER,
  user
});

export const LOGIN_USER = 'LOGIN-USER';
export const loginUser = user => ({
  type: LOGIN_USER,
  user
});

export const LOGOUT_USER = 'LOGOUT_USER';
export const logoutUser = () => ({
  type: LOGOUT_USER
});
