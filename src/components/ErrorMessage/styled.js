import styled from 'styled-components';
import { rgba } from 'polished';

export const ErrorWrapper = styled.div`
  margin-top: 2rem;
  padding: 1rem;
  background-color: ${p => p.theme.colors.red};
  border-radius: 8px;
  color: ${p => p.theme.colors.white};
`;

export const Title = styled.div`
  margin-bottom: 0.5rem;
  font-size: 1.2rem;
  font-weight: 600;
`;

export const Message = styled.code``;

export const Actions = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-flow: nowrap row;
`;

export const ErrorAction = styled.button`
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
