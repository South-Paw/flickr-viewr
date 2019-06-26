import styled from 'styled-components';
import { rgba } from 'polished';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  width: 100%;
  max-width: 1200px;
`;

export const Header = styled.div`
  background-color: ${p => p.theme.colors.dark};

  & > * {
    height: 20rem;
    display: flex;
    flex-flow: nowrap column;
    align-items: center;
    justify-content: center;

    @media (max-width: 600px) {
      height: 10rem;
    }
  }
`;

export const Input = styled.input`
  padding: 1rem;
  width: 80%;
  height: 3rem;
  background: none;
  background-color: ${p => p.theme.colors.white};
  border: none;
  border-radius: 4px;
  color: ${p => p.theme.colors.dark};
  font-size: 1.5rem;
  outline: none;
  transition: opacity ease-out 0.6s, box-shadow ease-out 0.2s;

  @media (max-width: 600px) {
    width: 100%;
  }

  &:disabled {
    cursor: not-allowed;
    opacity: 0.38;
  }

  &:focus {
    box-shadow: ${p => rgba(p.theme.colors.green, 0.38)} 0 0 0 4px;
  }
`;

export const Helper = styled.div`
  margin-top: 1rem;
  color: ${p => rgba(p.theme.colors.white, 0.83)};
  font-size: 0.8rem;
  font-weight: 300;
  letter-spacing: 1px;
`;
