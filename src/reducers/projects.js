import actions from '../actions/types';


export default (state = {content: {}}, action) => {
  switch (action.type) {
    case actions.ADD_PROJECT:
      return state;
    case actions.UPDATE_ACTIVE_PROJECT:
      return {...state, active: action.projectId};
    case actions.UPDATE_PROJECT:
      return {...state, content: {...state.content, [action.project.id]: action.project}};
    case actions.UPDATE_PROJECTS:
      return {...state, content: {...state.content, ...action.projects}};
    default:
      return state;
  }
};