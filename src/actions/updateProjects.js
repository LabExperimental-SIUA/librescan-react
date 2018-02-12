import actions from './types';

export default (projects) => {
  return {
    type: actions.UPDATE_PROJECTS,
    projects
  }
};