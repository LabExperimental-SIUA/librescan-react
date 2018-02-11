import * as Api from '../utils/api';

import actions from '../actions/types';
import { updateProjects } from '../actions';

export default function (action$) {
  return action$.ofType(actions.FETCH_PROJECTS)
    .switchMap(() =>
      Api.projects()
        .map(data => updateProjects(parseProjectsToDic(data)))
    );
};


const parseProjectsToDic = (data) => {
  return data.response.reduce((result, project) => ({...result, [project.id]: project}), {});
};
