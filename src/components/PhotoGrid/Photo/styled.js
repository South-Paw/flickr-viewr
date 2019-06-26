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

const Details = styled.div`
  padding: 0.5rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0;
  background-image: linear-gradient(transparent, ${p => p.theme.colors.darker});
  color: ${p => p.theme.colors.white};
  transition: opacity ease-out 0.3s;
  user-select: none;
`;
Details.displayName = 'Details';

const Item = styled.a`
  margin: 0.5rem;
  flex: 1 1 20%;
  overflow: hidden;
  position: relative;
  text-shadow: ${p => p.theme.colors.black} 1px;
  transition: box-shadow ease-out 0.3s;
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

  &:hover {
    box-shadow: ${p => rgba(p.theme.colors.black, 0.3)} 0 0 4px 2px;

    ${Details} {
      opacity: 1;
    }
  }
`;
Item.displayName = 'Item';

const Image = styled.div`
  width: 100%;
  height: 12rem;
  background: url('${p => p.src}');
  background-size: cover;
  background-position: center;
`;
Image.displayName = 'Image';

const Name = styled.div`
  width: 100%;
  height: 1rem;
  overflow: hidden;
  font-size: 0.8rem;
  text-overflow: ellipsis;
  text-shadow: ${p => p.theme.colors.black} 0 0 2px;
  white-space: pre;
`;
Name.displayName = 'Name';

const Author = styled.div`
  width: 100%;
  height: 1rem;
  overflow: hidden;
  color: inherit;
  font-size: 0.8rem;
  text-decoration: none;
  text-overflow: ellipsis;
  text-shadow: ${p => p.theme.colors.black} 0 0 2px;
  white-space: pre;

  span {
    font-weight: bold;
  }
`;
Author.displayName = 'Author';

const Tags = styled.div`
  margin-top: 0.25rem;
  overflow: hidden;
  font-size: 0.7rem;
  text-overflow: ellipsis;
  text-shadow: ${p => p.theme.colors.black} 0 0 2px;
  white-space: pre;

  span {
    margin-right: 0.2rem;

    &:before {
      content: '#';
    }
  }
`;
Tags.displayName = 'Tags';

export { Details, Item, Image, Name, Author, Tags };
