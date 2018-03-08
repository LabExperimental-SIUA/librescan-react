import actions from './types';

export default (projectId) => {
  return {
    type: actions.CREATE_IMAGES,
    projectId
  };
};