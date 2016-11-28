'use strict';

const app = require('../app.js');

let getShows = function(){
  return $.ajax({
    url: app.host + "/shows", // "http://book-json.herokuapp.com/books"
    method: 'GET',
    // dataType: 'json'
  });
};

const createShow = (data) => {
  //let token = app.user.token;
  return $.ajax({
    url: app.host + '/shows',
    method: 'POST',
//  headers: {
  //  Authorization: 'Token token=' + token,
  //  },
  data,
  });
};


module.exports = {
  getShows,
  createShow,
};
