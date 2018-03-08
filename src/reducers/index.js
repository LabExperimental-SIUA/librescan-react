import { i18nReducer } from 'react-redux-i18n';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import projects from './projects';
import title from './title';

export default combineReducers({
  routing: routerReducer,
  projects,
  title,
  i18n: i18nReducer
});