import './dependencies';

import { combineEpics } from 'redux-observable';
import fetchProject from './fetchProjectEpic';
import fetchProjects from './fetchProjectsEpic';
import fetchImages from './fetchImagesEpic';
import createImages from './createImagesEpic';


export default combineEpics(
  fetchProject,
  fetchProjects,
  fetchImages,
  createImages
);