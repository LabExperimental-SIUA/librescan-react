import actions from './types';

export default (projectId) => {
  return {
    type: actions.UPDATE_ACTIVE_PROJECT,
    projectId
  }
}