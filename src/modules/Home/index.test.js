/* eslint-env jest */

import React from 'react';
import { shallow, mount } from 'enzyme';
import fetchJsonp from 'fetch-jsonp';

import Theme from '../../components/Theme';
import Home, { formatFlickrTags } from './index';

jest.mock('fetch-jsonp');

const flushPromises = () => new Promise(resolve => setImmediate(resolve));

const mountWithTheme = component => mount(<Theme>{component}</Theme>);
const shallowWithTheme = component => shallow(<Theme>{component}</Theme>);

// I haven't written jest/enzyme tests in a while, so I might be a bit rusty :(

describe('module/Home', () => {
  beforeEach(async () => {
    await flushPromises();
    fetchJsonp.mockClear();
  });

  describe('formatFlickrTags', () => {
    it('returns given an empty string', () => {
      expect(formatFlickrTags('')).toBe('');
    });

    it('handles multiple comma seperated tags', () => {
      expect(formatFlickrTags('cat, tabby')).toBe('&tags=cat,tabby');
      expect(formatFlickrTags('new york, tower')).toBe('&tags=new york,tower');
      expect(formatFlickrTags('   apples  ,   fruit   ')).toBe('&tags=apples,fruit');
    });
  });

  describe('state', () => {
    it('fetchs on mount', async () => {
      fetchJsonp.mockResolvedValue({ json: () => ({}) });

      mountWithTheme(<Home />);

      expect(fetchJsonp.mock.calls.length).toBe(1);
    });

    it('sets state if the fetch fails', async () => {
      const expected = 'an error message!';

      fetchJsonp.mockRejectedValue({ message: expected });

      const mounted = mountWithTheme(<Home />);

      await flushPromises();

      expect(fetchJsonp.mock.calls.length).toBe(1);
      expect(mounted.find('Home').state().isLoading).toBe(false);
      expect(mounted.find('Home').state().hasError).toBe(true);
      expect(mounted.find('Home').state().error).toBe(expected);
    });

    it('sets state if the fetch succeeds', async () => {
      const expected = { test: 'some data' };

      fetchJsonp.mockResolvedValue({ json: () => expected });

      const mounted = mountWithTheme(<Home />);

      await flushPromises();

      expect(fetchJsonp.mock.calls.length).toBe(1);
      expect(mounted.find('Home').state().isLoading).toBe(false);
      expect(mounted.find('Home').state().hasError).toBe(false);
      expect(mounted.find('Home').state().data).toBe(expected);
    });
  });

  describe('render', () => {
    it('renders without crashing', () => {
      shallowWithTheme(<Home />);
    });

    it('renders an error if the fetch fails', async () => {
      const expected = 'an error message!';

      fetchJsonp.mockRejectedValue({ message: expected });

      const mounted = mountWithTheme(<Home />);

      await flushPromises();
      mounted.find('Home').update();

      expect(mounted.find('ErrorMessage').props().message).toBe(expected);
    });

    it('renders the PhotoGrid if the fetch succeeds', async () => {
      fetchJsonp.mockResolvedValue({ json: () => ({ items: [] }) });

      const mounted = mountWithTheme(<Home />);

      await flushPromises();
      mounted.find('Home').update();

      expect(mounted.find('PhotoGrid').exists()).toBe(true);
    });
  });
});
