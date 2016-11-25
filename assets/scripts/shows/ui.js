'use strict';

const showShowsTemplate = require('../templates/show-listing.handlebars');
//const showTitlesTemplate = require('../templates/book-titles.handlebars');

const getShowsSuccess = (shows) => {
console.log('show us the ', shows);
$('#content').html(showShowsTemplate(shows));
};


module.exports = {
  getShowsSuccess,
};
