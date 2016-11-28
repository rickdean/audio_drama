'use strict';
const getFormFields = require(`../../../lib/get-form-fields`);
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

const onCreateShow = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
    api.createShow(data)
    .then(ui.createShowSuccess)
    .then(function(){

    })
    .catch(ui.createShowFail);

      //api.indexShows()
        //.done(ui.indexShowSuccess)
        //.fail(ui.failure);
  };


const addHandlers = () => {
  $('#getShowsButton').on('click', onGetShows);
  $('#createShowButton').on('submit', onCreateShow);
  //$('#clearBooksButton').on('click', onClearBooks);
  //$('#getTitlesButton').on('click', onGetTitles);
  //$('.test-button').on('click', alerty);
};



module.exports = {
  addHandlers,
};
