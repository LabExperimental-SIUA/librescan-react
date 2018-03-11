import actions from './types';

export default (images, active) => {
  return {
    type: actions.UPDATE_IMAGES,
    images,
    active
  }
}