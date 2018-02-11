import actions from '../actions/types';


export default (state = {projects: {}}, action) => {
  switch (action.type) {
    case actions.ADD_PROJECT:
      return state;
    case actions.CHANGE_ACTIVE_PROJECT:
      return {...state, active: action.active};
    case actions.UPDATE_PROJECTS:
      return {...state, projects: {...state.projects, ...action.projects}};
    default:
      return state;
  }
};