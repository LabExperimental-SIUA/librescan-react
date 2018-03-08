import { i18nReducer } from 'react-redux-i18n';
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import projects from './projects';
import title from './title';
import images from './images';
import views from './views';

export default combineReducers({
  title,
  projects,
  images,
  views,
  routing: routerReducer,
  i18n: i18nReducer
});