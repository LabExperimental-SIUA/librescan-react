import React, { Component } from 'react';
import { connect } from 'react-redux';
import { I18n, setLocale } from 'react-redux-i18n';

class LanguageSelect extends Component {

  constructor(props) {
    super(props);
    this.state = {language: ''};
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  componentDidMount() {
    this.setState({language: this.props.i18n.locale})
  }

  changeLanguage(event) {
    const language = event.target.attributes.value.value;
    this.setState({language});
    this.props.setLocale(language)
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
          {I18n.t('languages.spanish')}
        </a>
        <a
          onClick={this.changeLanguage}
          className="dropdown-item"
          value="en"
          href="javascript:void(0)"
        >
          {I18n.t('languages.english')}
        </a>
      </div>
    )
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setLocale() {
      dispatch(setLocale(...arguments))
    }
  }
};

const mapStateToProps = ({i18n}) => {
  return {i18n}
};

export default connect(mapStateToProps, mapDispatchToProps)(LanguageSelect);