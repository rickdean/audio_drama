'use strict';
const getFormFields = require(`../../../lib/get-form-fields`);
const api = require('./api.js');
const ui = require('./ui.js');

const onGetShows = function (data) {
  event.preventDefault();
  api.getShows(data)
    .done(ui.getShowsSuccess)
    .fail(ui.failure);
};

const onDisplayShow = function (event) {
  event.preventDefault();
  let data = getFormFields(event.target);
  api.displayShow(data)
    .done(ui.success)
    .fail(ui.failure);
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

  const deleteId =  function (event){
    event.preventDefault();
    let id = $(event.target).attr("data-show-id");
    $(".delete-show-button").attr("data-show-id", id);
  };

  const onDeleteShow = function (event) {
    event.preventDefault();
    let id = $(this).attr("data-show-id");
    api.deleteShow(id)
      .done(ui.success)
      .fail(ui.failure);
    api.getShows()
      .done(ui.getShowsSuccess)
      .fail(ui.failure);
  };


  // const onDeleteShow = function (event) {
  //   event.preventDefault();
  //   let data = getFormFields(event.target);
  //   api.deleteShow(data)
  //     .done(ui.success)
  //     .fail(ui.failure);
  // //  api.indexUserPoses()
  //   //  .done(ui.indexUserPoseSuccess)
  //   //  .fail(ui.failure);
  //  };

const addHandlers = () => {
  $('#get-shows').on('submit', onGetShows);
  $('#show-project').on('submit', onDisplayShow);
//  $('#getShowsButton').on('click', onGetShows);
  $('#createShowButton').on('submit', onCreateShow);
  $('.title-display').on('click','.delete-show',deleteId);
  $('#delete-show-button').on('click', onDeleteShow);
  //$('#clearBooksButton').on('click', onClearBooks);
  //$('#getTitlesButton').on('click', onGetTitles);
  //$('.test-button').on('click', alerty);
};



module.exports = {
  addHandlers,
};
