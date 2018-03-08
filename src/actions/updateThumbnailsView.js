import actions from './types';

export default (properties) => {
  return {
    type: actions.UPDATE_THUMBNAILS_VIEW,
    properties
  }
}