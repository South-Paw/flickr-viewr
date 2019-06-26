import React, { Component } from 'react';
import debounce from 'debounce';
import fetchJsonp from 'fetch-jsonp';

import PhotoGrid from '../../components/PhotoGrid';
import ErrorMessage from '../../components/ErrorMessage';

import { Container, Header, Input, Helper } from './styled';

// Turns a string of text into valid tag argument for the Flickr API request.
export const formatFlickrTags = str => {
  if (!str) {
    return str;
  }

  return `&tags=${str
    .split(',')
    .map(tag => tag.trim())
    .join(',')}`;
};

class Home extends Component {
  constructor(props) {
    super(props);

    // Debounce wrapper for the flickr API public feeds fetch.
    // The debounce means we avoid spamming the API with requests every time a key is pressed.
    this.debouncedFetchFlickerFeed = debounce(this.fetchFlickrFeed, 600);
  }

  state = {
    isLoading: true,
    hasError: false,
    error: null,
    data: null,
    tags: '',
  };

  // When the component is first mounting, fetch the feed.
  componentDidMount = () => this.fetchFlickrFeed();

  // When the component updates.
  componentDidUpdate = (prevProps, { tags: prevTags }) => {
    const { tags } = this.state;

    // If tags have changed, call the debounced fetch to call the API with the new tags.
    if (prevTags !== tags) {
      this.debouncedFetchFlickerFeed(formatFlickrTags(tags));
    }
  };

  // Fetch the public feed from flicker API, optionally with additional url args.
  fetchFlickrFeed = (urlArgs = '') => {
    this.setState({ isLoading: true, hasError: false, error: null, data: null });

    fetchJsonp(`//www.flickr.com/services/feeds/photos_public.gne?format=json${urlArgs}`, {
      jsonpCallbackFunction: 'jsonFlickrFeed',
    })
      .then(res => res.json())
      .then(json => this.setState({ isLoading: false, hasError: false, data: json }))
      .catch(error => this.setState({ isLoading: false, hasError: true, error: error.message }));
  };

  // Change handler for search input.
  handleChange = ({ target: { value } }) => this.setState({ tags: value });

  render = () => {
    const { isLoading, hasError, data, error, tags } = this.state;

    return (
      <>
        <Header>
          <Container>
            <Input disabled={hasError} onChange={this.handleChange} value={tags} placeholder="search by tag..." />
            <Helper>
              💡 Search for multiple photo tags by comma seperating each one, e.g. <code>cat, tabby</code>
            </Helper>
          </Container>
        </Header>
        <Container>
          {hasError ? (
            <ErrorMessage
              title="Something's gone wrong!"
              message={error}
              actions={[{ label: 'Retry', onClick: () => this.fetchFlickrFeed() }]}
            />
          ) : (
            <PhotoGrid isLoading={isLoading} data={data} />
          )}
        </Container>
      </>
    );
  };
}

export default Home;
