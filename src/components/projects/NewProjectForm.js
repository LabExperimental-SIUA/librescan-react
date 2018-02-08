import React from 'react';
import {translate} from 'react-i18next';
import LanguageSelect from '../language/LanguajeSelect';

class NewProjectForm extends React.Component {

    render() {
        const { t } = this.props;
        return (
            <div>
                <h1>{t('new.project')}</h1>
                <LanguageSelect/>
            </div>
        );
    }
}

export default translate('translations')(NewProjectForm);