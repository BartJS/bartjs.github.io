var meetup = require('./meetup'),
    ui = require('./ui'),
    _ = require('lodash');

var bartjs = meetup.connectTo('bartjs');

bartjs.getMembers()
      .done(_.partial(ui.renderMembers, $("#members")));

bartjs.getEvents()
      .done(_.partial(ui.renderEvents,
                      $(".event-list"),
                      $("#event-template").html()
                      ));
