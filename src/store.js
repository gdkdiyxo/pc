import { createStore, combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import authReducer from './reducers/auth-reducer';
import cardReducer from './reducers/card-reducer';

export default createStore(
  combineReducers({
    form: formReducer,
    auth: authReducer,
    card: cardReducer
  })
);
