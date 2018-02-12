import * as Api from '../utils/api';

import actions from '../actions/types';
import { updateProject } from '../actions';

export default function (action$) {
  return action$.ofType(actions.FETCH_PROJECT)
    .switchMap(({projectId}) => {
      return Api.projects(projectId)
        .map(data => updateProject(data.response))
    }
    );
};
