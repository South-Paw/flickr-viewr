import styled from 'styled-components';
import { rgba } from 'polished';

const ErrorWrapper = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background-color: ${p => p.theme.colors.red};
  border-radius: 8px;
  color: ${p => p.theme.colors.white};
`;
ErrorWrapper.displayName = 'ErrorWrapper';

const Title = styled.div`
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  font-weight: 600;
`;
Title.displayName = 'Title';

const Message = styled.code``;
Message.displayName = 'Message';

const Actions = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-flow: nowrap row;
`;
Actions.displayName = 'Actions';

const ErrorAction = styled.button`
  padding: 0.25rem 0.5rem;
  background: none;
  border: 2px solid ${p => p.theme.colors.white};
  border-radius: 4px;
  color: ${p => p.theme.colors.white};
  font-weight: 500;

  &:focus {
    box-shadow: ${p => rgba(p.theme.colors.white, 0.4)} 0 0 0 3px;
  }
`;
ErrorAction.displayName = 'ErrorAction';

export { ErrorWrapper, Title, Message, Actions, ErrorAction };
