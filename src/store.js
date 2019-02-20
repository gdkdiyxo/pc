import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { reducer as formReducer } from 'redux-form';
import thunk from 'redux-thunk';

import authReducer from './reducers/auth-reducer';
import cardReducer from './reducers/card-reducer';

export default createStore(
  combineReducers({
    form: formReducer,
    auth: authReducer,
    card: cardReducer
  }),
  compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
);
