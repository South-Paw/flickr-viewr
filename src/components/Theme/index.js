import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';

import ThemeReset from './ThemeReset';
import system from './system';

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
