import React from 'react';
import ReactDOM from 'react-dom';

import Theme from './components/Theme';

import Router from './Router';

ReactDOM.render(
  <Theme>
    <Router />
  </Theme>,
  document.getElementById('root'),
);
