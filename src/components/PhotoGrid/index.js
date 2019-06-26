import React from 'react';
import PropTypes from 'prop-types';

import Photo from './Photo';

import { NoResults, GridWrapper, Grid, SkeletonItem } from './styled';

const PhotoGrid = ({ isLoading, data }) => {
  // If we're loading, show a skeleton UI of at least 8 items.
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

  // If we didn't fetch any items or there's no results.
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
          // `idx * idx` just guarantees us a unique number for each key.
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
