const feed = require('./data/feed.json');

export default {
  '/api/feed': ({ method, url, params, urlparams, headers }) => {
    console.log(feed);
    return {
      status: 200,
      data: feed,
      ok: true
    };  // default status is 200
  }
}
