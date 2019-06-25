# flickr-viewr

📷 React application for viewing and searching the Flickr Public Feed via their JSON API

---

## Development

Install [`Node.js`](https://nodejs.org/), open command line in the project folder and then use any of the following commands

```bash
# install dependencies
npm i

# serve for local dev
npm run start

# build for production
npm run build

# test project
npm run test

# format project source
npm run format

# lint project
npm run lint
```

## Requirements

- [x] UI to search the ["Public Feed"](https://www.flickr.com/services/feeds/docs/photos_public/) Flickr [JSONP API](https://www.flickr.com/services/api/response.json.html) and view images.
- [x] Apply basic styling to make it presentable
- [ ] Unit tests
- [x] Real-time/instant results as the user types
- [x] Image as thumbnail
- [x] Image author
- [x] Image tags
- [x] Link the thumbnail to the hi-res image so the user can view that too

Assume that the app and the data set will grow over time, so the initial architecture needs to take this into account.

Need to be able to run: `npm install` / `npm start` in the root of the project and have the app run locally (In the latest Chrome/Firefox, don't worry about supporting older browsers).

## License

MIT, see the [LICENSE](./LICENSE) file.
