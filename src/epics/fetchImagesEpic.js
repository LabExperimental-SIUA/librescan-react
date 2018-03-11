import * as Api from '../utils/api';

import actions from '../actions/types';
import { updateImages } from '../actions';

export default function (action$, store) {
  return action$.ofType(actions.FETCH_IMAGES)
    .switchMap(({projectId}) => Api.images(projectId)
        .map(data => {
          const {response} = data;
          const projectLayout = store.getState().projects.content[projectId].layout || 2;
          const active = response.slice(response.length-projectLayout, response.length);
          return updateImages(data.response, active.map(image => image.id))
        })
    );
};
