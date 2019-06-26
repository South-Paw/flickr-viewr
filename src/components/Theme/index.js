import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import ThemeReset from './ThemeReset';
import system from './system';

// If we were going to extend this application and say wanted to add a light and dark theme,
// we simply need to pass in a different theme `system` with the same keys but different variables.

const Theme = ({ children }) => (
  <ThemeProvider theme={system}>
    <>
      <ThemeReset />
      {children}
    </>
  </ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
