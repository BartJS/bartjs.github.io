var meetup = require('./meetup'),
    ui = require('./ui'),
    _ = require('lodash');

var bartjs = meetup.connectTo('bartjs'),
    $header = $('.scrolled-down'),
    $mainHeader = $('.main-header'),
    scrollClass = 'scroll-header-visible',
    setHeaderScrolling = function () {
      $header.toggleClass(scrollClass, $(window).scrollTop() > $mainHeader.height());
    };

$(document).on('scroll', setHeaderScrolling);

bartjs.getMembers()
      .done(_.partial(ui.renderMembers, $("#members")));

bartjs.getEvents()
      .done(_.partial(ui.renderEvents,
                      $(".event-list"),
                      $("#event-template").html()
                      ));
