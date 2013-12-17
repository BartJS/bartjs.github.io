var $ = require('jquery-browserify'),
    _ = require('lodash'),
    parser = require('./parser'),
    compiled = _.template('<li><img src="<%= photo.photo_link %>" alt="<%= name %>" /></li>');

var item = function (member) {
  return compiled(member);
}, hasPhoto = function (member) {
  return member.photo && member.photo.photo_link;
};

module.exports.renderMembers = function ($el, data) {
  var items = _(parser.members(data))
                .filter(hasPhoto)
                .map(item)
                .shuffle()
                .reduce(function (result, val) {
                  return result + val;
                }, '');
  return $el.append(items);
};