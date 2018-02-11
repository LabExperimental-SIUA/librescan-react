import './dependencies';

import { combineEpics } from 'redux-observable';
import fetchContacts from './fetchProjectsEpic';


export default combineEpics(
  fetchContacts
);