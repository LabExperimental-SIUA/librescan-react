import React, { Component } from 'react';
import { translate, Trans } from 'react-i18next';
import './App.css';


class App extends Component {
  render() {
    const { t, i18n } = this.props;

    const changeLanguage = (lng) => {
      i18n.changeLanguage(lng);
    };

    return (
      <div className="App">
        <div className="App-header">
          <h2>{t('react.welcome')}</h2>
          <button onClick={() => changeLanguage('es')}>es</button>
          <button onClick={() => changeLanguage('en')}>en</button>
        </div>
        <div className="App-intro">
          <Trans>
            To get started, edit <code>src/App.js</code> and save to reload.
          </Trans>
        </div>
        <div>{t('hello')}</div>
      </div>
    );
  }
}

export default translate('translations')(App);
