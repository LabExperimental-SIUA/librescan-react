import React from 'react';
import { Translate, I18n } from 'react-redux-i18n';

class NewProjectForm extends React.Component {

  render() {
    return (
      <div>
        <h1><Translate value="application.new" entity={I18n.t('entities.project')}/></h1>
      </div>
    );
  }
}

export default NewProjectForm;