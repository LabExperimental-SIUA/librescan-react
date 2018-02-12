import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import store from './storage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { Home, NewProjectForm } from "./components";

import './utils/i18n/i18n'

import { applicationComponent } from './components/layout';

import { Project } from './containers';


import registerServiceWorker from './utils/registerServiceWorker';

render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/" component={applicationComponent(Home)}/>
        <Route exact path="/projects/new" component={applicationComponent(NewProjectForm)}/>
        <Route exact path="/projects/:projectId/outputs" component={applicationComponent(NewProjectForm)}/>
        <Route path="/projects/:projectId/" component={applicationComponent(Project)}/>
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
