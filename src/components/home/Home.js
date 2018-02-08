import React, { Component } from 'react';
import {Trans, translate} from 'react-i18next';
import LanguageSelect from '../language/LanguajeSelect';
import {Link} from 'react-router-dom';

class Home extends Component {
    render() {
        return (
            <div>
                <h2>
                    <Trans>
                        Welcome to LibreScan
                    </Trans>
                </h2>
                <Link to="/projects/new"> New Project </Link>
                <LanguageSelect/>
            </div>
        )
    };
}

export default translate('translations')(Home);
