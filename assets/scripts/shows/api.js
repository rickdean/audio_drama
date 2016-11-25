'use strict';

const config = require('../config.js');

let getShows = function(){
  return $.ajax({
    url: config.host + "/shows", // "http://book-json.herokuapp.com/books"
    method: 'GET',
    // dataType: 'json'
  });
};

module.exports = {
  getShows,
};
