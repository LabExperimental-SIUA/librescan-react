import React from 'react';
import { Link } from 'react-router-dom';
import LanguageSelect from '../language/LanguageSelect';
import { Translate, I18n } from "react-redux-i18n";


const Header = (props) => {
  return (
      <div>
        <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarButton"
                  aria-controls="navbarButton" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"/>
          </button>

          <div className="collapse navbar-collapse" id="navbarButton">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="/projects/new"><Translate value="application.new" entity={I18n.t('entities.project')}/>
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="javascript:void(0);" id="language-dropdown" data-toggle="dropdown"
                   aria-haspopup="true" aria-expanded="false"><Translate value="navbar.language"/></a>
                <LanguageSelect/>
              </li>
            </ul>
          </div>
        </nav>
      </div>
  );
};

export default Header;


/*
import { Link } from 'react-router-dom';

<div>
  <Link to="/projects/new"> New Project </Link>
</div>

*/