import * as Api from '../utils/api';

import actions from '../actions/types';
import { addImages } from '../actions';

export default function (action$) {
  return action$.ofType(actions.CREATE_IMAGES)
    .switchMap(({projectId}) =>
      Api.createImages(projectId)
        .map(data => addImages(data.response))
    );
};

