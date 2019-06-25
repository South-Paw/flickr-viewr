import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 1200px;
  width: 100%;
`;

export const Header = styled.div`
  background-color: #222;

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
  background-color: #fff;
  border: none;
  border-radius: 4px;
  color: #222;
  font-size: 1.5rem;
  outline: none;
  transition: opacity ease-out 0.6s, box-shadow ease-out 0.2s;

  @media (max-width: 600px) {
    width: 100%;
  }

  &:disabled {
    opacity: 0.38;
    cursor: not-allowed;
  }

  &:focus {
    box-shadow: rgba(0, 255, 137, 0.38) 0 0 0 4px;
  }
`;

export const Helper = styled.div`
  margin-top: 1rem;
  color: rgba(255, 255, 255, 0.83);
  font-size: 0.8rem;
  font-weight: 300;
  letter-spacing: 1px;
`;
