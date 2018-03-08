import { loadTranslations, setLocale, syncTranslationWithStore } from 'react-redux-i18n';
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import { createEpicMiddleware } from 'redux-observable';
import createHistory from 'history/createBrowserHistory'
import rootReducer from '../reducers';
import rootEpic from '../epics';

import { translations } from '../utils/i18n';

export const history = createHistory();

const epicMiddleware = createEpicMiddleware(rootEpic);

const initialState = {};
const enhancers = [];
const middleware = [
  epicMiddleware,
  thunk,
  routerMiddleware(history)
];

if (process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.devToolsExtension;

  if (typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension())
  }
}

const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);


syncTranslationWithStore(store);
store.dispatch(loadTranslations(translations));
store.dispatch(setLocale('en'));

export default store;