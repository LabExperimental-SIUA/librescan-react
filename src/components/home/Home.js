import React, { Component } from 'react';
import { translate } from 'react-i18next';

import { Projects } from '../../containers/projects';

class Home extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-12 col-md-12 col-lg-12">
          <Projects/>
        </div>
      </div>
    )
  };
}

export default translate('translations')(Home);
