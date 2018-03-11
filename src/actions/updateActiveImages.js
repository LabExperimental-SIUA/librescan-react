import actions from './types';

export default (images) => {
  return {
    type: actions.UPDATE_ACTIVE_IMAGES,
    images
  };
};