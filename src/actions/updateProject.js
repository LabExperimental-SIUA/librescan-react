import actions from './types';

export default (project) => {
  return {
    type: actions.UPDATE_PROJECT,
    project
  }
}