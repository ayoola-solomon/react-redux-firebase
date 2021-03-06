import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createLogger from 'redux-logger';
import rootReducer from './reducers';

export default function configureStore(initialState = {}) {
  const logger = createLogger();
  const enhancers = [
    applyMiddleware(thunk, logger),
  ];
  const store = createStore(rootReducer, initialState, compose(...enhancers));
  return store;
}
