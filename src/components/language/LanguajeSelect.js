import React, { Component } from 'react';
import { translate, Trans } from 'react-i18next';

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
        this.props.i18n.changeLanguage(event.target.value);
        this.setState({language: event.target.value})
    }

    render() {
        return (
            <div>
                <h3>
                    {this.props.i18n.t('current.language')}:
                    {this.state.language.toString()}
                </h3>
                <select value={this.state.language} onChange={this.changeLanguage}>
                    <option value="en">English</option>
                    <option value="es">Español</option>
                </select>
            </div>
        )
    };
}

export default translate('translations')(LanguageSelect);