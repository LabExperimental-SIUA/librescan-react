import React from 'react';
import { Link } from 'react-router-dom';
import { TranslatedText } from '../../utils/i18n';

export default () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-12 offset-md-3 col-md-8 offset-lg-3 col-lg-6">
          <div className="new-project-hint text-center">
            <div>
              <TranslatedText id="home.newProjectHint"/>
              <Link to="/projects/new"> <TranslatedText id="new.project"/> </Link>
              <TranslatedText id="home.newProjectHintEnd"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
};