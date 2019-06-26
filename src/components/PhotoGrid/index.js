import React from 'react';
import PropTypes from 'prop-types';

import Photo from './Photo';

import { NoResults, GridWrapper, Grid, SkeletonItem } from './styled';

const PhotoGrid = ({ isLoading, data }) => {
  if (isLoading) {
    const arr = new Array(8).fill();

    return (
      <GridWrapper>
        <Grid>
          {Object.keys(arr).map(key => (
            <SkeletonItem key={`skeleton_${key}`} />
          ))}
        </Grid>
      </GridWrapper>
    );
  }

  const { items } = data;

  if (!items || !items.length) {
    return <NoResults>No results found 😵</NoResults>;
  }

  const { title, description } = data;

  return (
    <GridWrapper>
      {title && <h1>{title}</h1>}
      {description && <p>{description}</p>}
      <Grid>
        {items.map((item, idx) => (
          // eslint-disable-next-line
          <Photo key={`${idx * idx}__${item.author_id}`} {...item} />
        ))}
      </Grid>
    </GridWrapper>
  );
};

PhotoGrid.propTypes = {
  isLoading: PropTypes.bool,
  data: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    items: PropTypes.array,
  }),
};

PhotoGrid.defaultProps = {
  isLoading: false,
  data: null,
};

export default PhotoGrid;
