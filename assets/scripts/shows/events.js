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
      .done(ui.deleteShowsSuccess)
      .fail(ui.failure);
    // api.getShows()
    //   .done(ui.getShowsSuccess)
    //   .fail(ui.failure);
  };

  const updateId =  function (event){
  event.preventDefault();
  let id = $(event.target).attr("data-show-id");
  $(".update-show-button").attr("data-show-id", id);
};

const onUpdateShow = function (event) {
  event.preventDefault();
  let id = $(".update-show-button").attr("data-show-id");
  let data = getFormFields(event.target);
  api.updateShow(data, id)
    .done( function(){
      ui.updateShowSuccess();
      onGetShows(event);
    })
    .fail(ui.failure);
};


const addHandlers = () => {
  $('#get-shows').on('click', onGetShows);
  $('#createShowButton').on('submit', onCreateShow);
  $('.title-display').on('click','.delete-show',deleteId);
  $('#delete-show-button').on('click', onDeleteShow);
  $('.title-display').on('click','.update-show',updateId);
  $('#updateShowModal').on('submit', onUpdateShow);
  $('.title-display').on('click','.update-genre',updateId);
  $('#updateGenreModal').on('submit', onUpdateShow);
  $('.title-display').on('click','.update-va',updateId);
  $('#updateVaModal').on('submit', onUpdateShow);
  $('.title-display').on('click','.update-site',updateId);
  $('#updateSiteModal').on('submit', onUpdateShow);
  $('.title-display').on('click','.update-rss',updateId);
  $('#updateRssModal').on('submit', onUpdateShow);
  $('.title-display').on('click','.update-ep',updateId);
  $('#updateEpModal').on('submit', onUpdateShow);
  $('.title-display').on('click','.update-date',updateId);
  $('#updateDateModal').on('submit', onUpdateShow);
  $('.title-display').on('click','.update-desc',updateId);
  $('#updateDescModal').on('submit', onUpdateShow);
};


module.exports = {
  addHandlers,
};
