/* eslint-env jest */

import React from 'react';
import { mount } from 'enzyme';

import Theme from '../Theme';
import PhotoGrid from './index';

const mountWithTheme = component => mount(<Theme>{component}</Theme>);

describe('components/PhotoGrid', () => {
  describe('props', () => {
    it('renders 8 skeleton items when `isLoading=true`', async () => {
      const mounted = mountWithTheme(<PhotoGrid isLoading />);

      expect(mounted.find('SkeletonItem').length).toBe(8);
    });

    it('renders no results when `isLoading=false` and `data` has no `items`', async () => {
      const mounted = mountWithTheme(<PhotoGrid isLoading={false} data={{}} />);

      expect(mounted.find('NoResults').exists()).toBe(true);
    });

    it('renders items when `isLoading=false` and `data` has `items`', async () => {
      const photoProps = {
        title: 'title',
        link: '//example.com',
        media: { m: '//example.com' },
        author: 'author',
        author_id: 'author_id',
        tags: 'tags',
      };

      const mounted = mountWithTheme(<PhotoGrid isLoading={false} data={{ items: [photoProps] }} />);

      expect(mounted.find('Photo').length).toBe(1);
      expect(mounted.find('Photo').props()).toEqual(photoProps);
    });
  });
});
