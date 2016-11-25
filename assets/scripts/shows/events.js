'use strict';

const api = require('./api.js');
const ui = require('./ui.js');

const onGetShows = (event) => {
  event.preventDefault();
  api.getShows()
    .then(ui.getShowsSuccess)
    .then(function() {
  //  $('.test-button').on('click', alerty);
  //  $('.delete-book').on('click', deletBook);
})
    .catch(ui.failure);
};

const addHandlers = () => {
  $('#getShowsButton').on('click', onGetShows);
  //$('#clearBooksButton').on('click', onClearBooks);
  //$('#getTitlesButton').on('click', onGetTitles);
  //$('.test-button').on('click', alerty);
};

module.exports = {
  addHandlers,
};
