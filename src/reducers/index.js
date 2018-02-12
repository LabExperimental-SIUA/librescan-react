import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import projects from './projects';
import title from './title';

export default combineReducers({
  routing: routerReducer,
  projects,
  title
});