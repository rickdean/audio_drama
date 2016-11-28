'use strict';

const showShowsTemplate = require('../templates/show-listing.handlebars');
//const showTitlesTemplate = require('../templates/book-titles.handlebars');

const getShowsSuccess = (shows) => {
console.log('show us the ', shows);
$('#content').html(showShowsTemplate(shows));
};

const createShowSuccess = (data) => {
  console.log(data);
  console.log('show us the ', shows);
};

const createShowFail = () => {
  clearInputField();
};


module.exports = {
  getShowsSuccess,
  createShowSuccess,
  createShowFail,
};
