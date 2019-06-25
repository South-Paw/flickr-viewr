import React from 'react';
import PropTypes from 'prop-types';

import { ErrorWrapper, Title, Message, Actions, ErrorAction } from './styled';

const ErrorMessage = ({ title, message, actions }) => (
  <ErrorWrapper>
    {title && <Title>{title}</Title>}
    {message && <Message>{message}</Message>}
    {actions && (
      <Actions>
        {actions.map(({ label, ...props }) => (
          <ErrorAction key={label} type="button" {...props}>
            {label}
          </ErrorAction>
        ))}
      </Actions>
    )}
  </ErrorWrapper>
);

ErrorMessage.propTypes = {
  title: PropTypes.node,
  message: PropTypes.node,
  actions: PropTypes.arrayOf(PropTypes.shape({ label: PropTypes.string.isRequired, onClick: PropTypes.func })),
};

ErrorMessage.defaultProps = {
  title: null,
  message: null,
  actions: null,
};

export default ErrorMessage;
