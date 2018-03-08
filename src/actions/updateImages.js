import actions from './types';

export default (images) => {
  return {
    type: actions.UPDATE_IMAGES,
    images
  }
}