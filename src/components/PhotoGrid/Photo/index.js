import React from 'react';
import PropTypes from 'prop-types';

import { Item, Image, Details, Name, Author, Tags } from './styled';

const formatAuthor = str => str.split('"')[1];

const Photo = ({ title, link, media: { m }, author, author_id: authorId, tags }) => (
  <Item href={link} target="_blank" rel="noopener noreferrer">
    <Image src={m} />
    <Details>
      {title && <Name>{title}</Name>}
      {authorId && (
        <Author>
          by <span>{author ? formatAuthor(author) : authorId}</span>
        </Author>
      )}
      {tags && (
        <Tags>
          {tags.split(' ').map(tag => (
            <span key={tag}>{tag}</span>
          ))}
        </Tags>
      )}
    </Details>
  </Item>
);

Photo.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string.isRequired,
  media: PropTypes.shape({ m: PropTypes.string.isRequired }).isRequired,
  author: PropTypes.string,
  author_id: PropTypes.string.isRequired,
  tags: PropTypes.string,
};

Photo.defaultProps = {
  title: null,
  author: null,
  tags: null,
};

export default Photo;
