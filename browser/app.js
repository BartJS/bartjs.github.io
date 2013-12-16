var members = require('./members'),
    ui = require('./ui'),
    _ = require('lodash');

members
    .connectTo('bartjs')
    .getMembers()
    .done(_.partial(ui.renderMembers, $("#members")));