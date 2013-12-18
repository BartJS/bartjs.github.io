var config = require('./config'),
    _ = require('lodash'),
    $ = require('jquery-browserify'),
    base = 'https://api.meetup.com/2/';

var getUrl = function (method, args) {
  args = _.assign(args, {
    key: config.API_KEY,
    callback: '?'
  });
  return _.reduce(args, function(result, val, key) {
    return result + key + '=' + val + '&';
  }, base + method + '?').slice(0, -1);
},
request = function (url) {
  return $.getJSON(url);
};

var Meetup = function (meetupURL) {
    this.id = meetupURL;
};

Meetup.prototype.getMembers = function () {
  var url = getUrl('members', {
    group_urlname: this.id
  });
  return request(url);
};

Meetup.prototype.getEvents = function () {
  var url = getUrl('events', {
    group_urlname: this.id
  });
  return request(url);
}

module.exports = Meetup;
module.exports.connectTo = function (meetupURL)  {
    return new Meetup(meetupURL);
};