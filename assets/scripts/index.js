'use strict';

const authEvents = require('./auth/events.js');


require('./example');

$(()=>{
  authEvents.addHandlers();
  $(".reset, .close").click(function() {
      $("input").val("");
  });
});
