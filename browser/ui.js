var $ = require('jquery-browserify'),
    _ = require('lodash'),
    parser = require('./parser'),
    toItem = _.template('<li><img src="<%= photo.photo_link %>" alt="<%= name %>" /></li>');

var hasPhoto = function (member) {
  return member.photo && member.photo.photo_link;
}, concat = function (result, val) {
  return result + val;
};

module.exports.renderMembers = function ($el, data) {
  var items = _(parser.members(data))
                .filter(hasPhoto)
                .shuffle()
                .map(toItem)
                .reduce(concat, '');
  return $el.append(items);
};


module.exports.renderEvents = function ($el, template, data) {
  var toEventTemplate = _.template(template);
  var events = _(parser.events(data))
                .sortBy('time')
                .take(2)
                .map(toEventTemplate)
                .reduce(concat, '');

  return $el.append(events);
};