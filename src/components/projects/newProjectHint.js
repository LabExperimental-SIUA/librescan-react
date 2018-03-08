import React from 'react';
import { Link } from 'react-router-dom';
import { Translate, I18n } from 'react-redux-i18n';

export default () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 offset-md-3 col-md-8 offset-lg-3 col-lg-6">
          <div className="new-project-hint text-center">
            <div>
              <Translate value="home.newProjectHint"/>
              <Link to="/projects/new"> <Translate value="application.new" entity={I18n.t('entities.project')}/> </Link>
              <Translate value="home.newProjectHintEnd"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};