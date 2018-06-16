const feed = require('./data/feed.json');

export default {
  '/api/feed': ({ method, url, params, urlparams, headers }) => {
    const today = new Date();
    const oneWeekAgo = new Date().setDate(today.getDate() - 5);
    feed.data.forEach((post)=>{
      post.created_time = randomDate(oneWeekAgo, today, 0, 23).getTime();
    });
    return {
      status: 200,
      data: feed,
      ok: true
    };  // default status is 200
  }
}

randomDate = (start, end, startHour, endHour) => {
  var date = new Date(+start + Math.random() * (end - start));
  var hour = startHour + Math.random() * (endHour - startHour) | 0;
  date.setHours(hour);
  return date;
}
