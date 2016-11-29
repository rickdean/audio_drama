'use strict';

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.log(error);
};

//const showShowsTemplate = require('../templates/show-listing.handlebars');
//const showTitlesTemplate = require('../templates/book-titles.handlebars');

const showShowsTemplate = require('../templates/show-listing.handlebars');

const getShowsSuccess = (shows) => {
  $('.title-display').html(showShowsTemplate(shows));
  console.log(shows);
};

// const getShowsSuccess = (shows) => {
// console.log('show us the ', shows);
// $('#content').html(showShowsTemplate(shows));
// };

const createShowSuccess = (data) => {
  console.log(data);
};

const createShowFail = () => {
//  clearInputField();
};

module.exports = {
  success,
  failure,
  getShowsSuccess,
  createShowSuccess,
  createShowFail,
};
