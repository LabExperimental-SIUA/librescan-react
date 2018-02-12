import './dependencies';

import { combineEpics } from 'redux-observable';
import fetchProject from './fetchProjectEpic';
import fetchProjects from './fetchProjectsEpic';


export default combineEpics(
  fetchProject,
  fetchProjects
);