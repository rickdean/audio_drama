'use strict';

const authEvents = require('./auth/events.js');
const showEvents = require('./shows/events.js');
//const audioDramaTemplate = require('./templates/audio-drama.handlebars');

require('./example');

$(()=>{
  authEvents.addHandlers();
  $(".reset, .close").click(function() {
      $("input").val("");
  });
  showEvents.addHandlers()
});
