# flickr-viewr

📷 React application for viewing and searching the Flickr Public Feed via their JSON API

[![Live Demo](https://img.shields.io/badge/netlify-live_demo-1e9498.svg)](https://priceless-galileo-148404.netlify.com/)

---

## Development

Install [`Node.js`](https://nodejs.org/) and [`Yarn`](https://yarnpkg.com), open command line in the project folder and then use any of the following commands

```bash
# install dependencies
yarn

# serve for local dev
yarn start

# build for production
yarn build

# test project
yarn test

# format project source
yarn format

# lint project
yarn lint
```

## Requirements

- [x] UI to search the ["Public Feed"](https://www.flickr.com/services/feeds/docs/photos_public/) Flickr [JSONP API](https://www.flickr.com/services/api/response.json.html) and view images.
- [x] Apply basic styling to make it presentable
- [x] Unit tests
- [x] Real-time/instant results as the user types
- [x] Image as thumbnail
- [x] Image author
- [x] Image tags
- [x] Link the thumbnail to the hi-res image so the user can view that too

Assume that the app and the data set will grow over time, so the initial architecture needs to take this into account.

Need to be able to run: `yarn` / `yarn start` in the root of the project and have the app run locally (In the latest Chrome/Firefox, don't worry about supporting older browsers).

## License

MIT, see the [LICENSE](./LICENSE) file.
