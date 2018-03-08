import actions from '../actions/types';

const defaultState = {content:{}, order:[], active:[]};

export default (state=defaultState, action) => {
  switch (action.type) {
    case actions.UPDATE_IMAGES:
      return addImagesToState(defaultState, action.images);
    case actions.ADD_IMAGES:
      return addImagesToState(state, action.images);
    default:
      return state;
  }
}

const addImagesToState = (state, images) => {
  return images.reduce((result, image) => {
    return ({
      ...result,
      content: {
        ...result.content,
        [image.id]: image
      },
      order: [
        ...result.order,
        image.id
      ],
      active: [...result.active]
    });
  }, state);
};