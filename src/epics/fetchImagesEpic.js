import * as Api from '../utils/api';

import actions from '../actions/types';
import { updateImages } from '../actions';

export default function (action$) {
  return action$.ofType(actions.FETCH_IMAGES)
    .switchMap(({projectId}) =>
      Api.images(projectId)
        .map(data => updateImages(data.response))
    );
};