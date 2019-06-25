import React from 'react';
import { Redirect, Route, Switch } from 'react-router';
import { BrowserRouter as ReactRouter } from 'react-router-dom';

import Home from './modules/Home';

import { HOME_PATH } from './paths';

const Router = () => (
  <ReactRouter>
    <Switch>
      <Route exact path={HOME_PATH} component={Home} />
      {/* default catch all route */}
      <Route component={() => <Redirect to={HOME_PATH} />} />
    </Switch>
  </ReactRouter>
);

export default Router;
