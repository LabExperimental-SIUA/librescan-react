import React, { Component } from 'react';
import { translate } from 'react-i18next';

class LanguageSelect extends Component {

  constructor(props) {
    super(props);
    this.state = {language: ''};
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  componentDidMount() {
    this.setState({language: this.props.i18n.language})
  }

  changeLanguage(event) {

    const language = event.target.attributes.value.value;
    this.props.i18n.changeLanguage(language);
    this.setState({language})
  }

  render() {
    return (
      <div className="dropdown-menu" aria-labelledby="language-dropdown">
        <a
          onClick={this.changeLanguage}
          className="dropdown-item"
          value="es"
          href="javascript:void(0)"
        >
          Español
        </a>
        <a
          onClick={this.changeLanguage}
          className="dropdown-item"
          value="en"
          href="javascript:void(0)"
        >
          English
        </a>
      </div>
    )
  };
}

export default translate('translations')(LanguageSelect);