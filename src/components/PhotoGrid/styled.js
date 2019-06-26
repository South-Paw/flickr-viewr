import styled, { keyframes } from 'styled-components';
import { rgba } from 'polished';

const skeletonShine = keyframes`
  0% {
    background-position: 0px;
  }

  40%, 100% {
    background-position: 300px;
  }
`;

export const NoResults = styled.div`
  margin: 2rem; 0;
  height: 6rem;
  display: flex;
  flex-flow: nowrap row;
  align-items: center;
  justify-content: center;
  font-weight: 500;
`;

export const GridWrapper = styled.div`
  margin: 2rem 0;

  h1 {
    margin-bottom: 1rem;
  }
`;

export const Grid = styled.div`
  display: flex;
  flex-flow: wrap row;
`;

export const SkeletonItem = styled.div`
  margin: 0.5rem;
  flex: 1 1 20%;
  height: 12rem;
  background-image: linear-gradient(
    90deg,
    ${p => p.theme.colors.offwhite} 0px,
    ${p => rgba(p.theme.colors.lightgray, 0.8)} 40px,
    ${p => p.theme.colors.offwhite} 80px
  );
  background-size: 600px;
  animation: ${skeletonShine} 2s infinite ease-out;

  @media (max-width: 900px) {
    flex-basis: 33%;
  }

  @media (max-width: 600px) {
    flex-basis: 100%;
  }
`;
