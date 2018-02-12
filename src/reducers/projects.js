import actions from '../actions/types';


export default (state = {projects: {}}, action) => {
  switch (action.type) {
    case actions.ADD_PROJECT:
      return state;
    case actions.UPDATE_ACTIVE_PROJECT:
      return {...state, active: action.projectId};
    case actions.UPDATE_PROJECT:
      return {...state, projects: {...state.projects, [action.project.id]: action.project}};
    case actions.UPDATE_PROJECTS:
      return {...state, projects: {...state.projects, ...action.projects}};
    default:
      return state;
  }
};