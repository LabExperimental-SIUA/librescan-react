import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import store from './storage/store'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import {
    Home,
    NewProjectForm
} from "./components";

import './utils/i18n/i18n'


import registerServiceWorker from './utils/registerServiceWorker';

render(
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={Home}/>
                <Route exact path="/projects/new" component={NewProjectForm}/>
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
