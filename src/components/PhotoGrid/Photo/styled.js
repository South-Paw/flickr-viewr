import styled, { keyframes } from 'styled-components';

const skeletonShine = keyframes`
  0% {
    background-position: 0px;
  }

  40%, 100% {
    background-position: 300px;
  }
`;

export const Details = styled.div`
  padding: 0.5rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  background-image: linear-gradient(transparent, #111);
  color: white;
  transition: opacity ease-out 0.3s;
  user-select: none;
`;

export const Item = styled.a`
  margin: 0.5rem;
  flex: 1 1 20%;
  overflow: hidden;
  position: relative;
  text-shadow: #000 1px;
  transition: box-shadow ease-out 0.3s;

  background-image: linear-gradient(90deg, #f4f4f4 0px, rgba(229, 229, 229, 0.8) 40px, #f4f4f4 80px);
  background-size: 600px;
  animation: ${skeletonShine} 3s infinite ease-out;

  @media (max-width: 900px) {
    flex-basis: 33%;
  }

  @media (max-width: 600px) {
    flex-basis: 100%;
  }

  &:hover {
    box-shadow: rgba(0, 0, 0, 0.3) 0 0 4px 2px;

    ${Details} {
      opacity: 1;
    }
  }
`;

export const Image = styled.div`
  width: 100%;
  height: 12rem;
  background: url('${p => p.src}');
  background-size: cover;
  background-position: center;
`;

export const Name = styled.div`
  width: 100%;
  height: 1rem;
  overflow: hidden;
  font-size: 0.8rem;
  text-overflow: ellipsis;
  text-shadow: #000 0 0 2px;
  white-space: pre;
`;

export const Author = styled.div`
  width: 100%;
  height: 1rem;
  overflow: hidden;
  color: inherit;
  font-size: 0.8rem;
  text-decoration: none;
  text-overflow: ellipsis;
  text-shadow: #000 0 0 2px;
  white-space: pre;

  span {
    font-weight: bold;
  }
`;

export const Tags = styled.div`
  margin-top: 0.25rem;
  overflow: hidden;
  font-size: 0.7rem;
  text-overflow: ellipsis;
  text-shadow: #000 0 0 2px;
  white-space: pre;

  span {
    margin-right: 0.2rem;

    &:before {
      content: '#';
    }
  }
`;
