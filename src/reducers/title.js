import actions from '../actions/types';

export default (state = 'LibreScan', action) => {
  switch (action.type) {
    case actions.UPDATE_HEADER_TITLE:
      return action.title;
    default:
      return state;
  }
}