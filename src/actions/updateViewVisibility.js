import actions from './types';

export default (viewName, show) => {
  return {
    type: actions.UPDATE_VIEW_VISIBILITY,
    viewName,
    show
  }
}