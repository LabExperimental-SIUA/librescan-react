import actions from './types';

export default (images) => {
  return {
    type: actions.ADD_IMAGES,
    images
  }
}