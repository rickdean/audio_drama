'use strict';

const clearInputField = () => {
  $('.input').val('');
};

const success = (data) => {
  console.log(data);
};

const failure = (error) => {
  console.log(error);
};

const showShowsTemplate = require('../templates/show-listing.handlebars');

const getShowsSuccess = (shows) => {
  $('.title-display').html(showShowsTemplate(shows));
  $(".bigMessage").hide();
  $('.title-display').show(500);
  $("#addBox").hide();
  console.log(shows);
};


const createShowSuccess = (data) => {
  console.log(data);
  clearInputField();
  $("#addBox").hide();
  $(".bigMessage").show(500);
};

const createShowFail = () => {
};

const updateShowSuccess = () => {
  clearInputField();
  $('#updateShowModal').modal('hide');
  $('#updateGenreModal').modal('hide');
  $('#updateVaModal').modal('hide');
  $('#updateSiteModal').modal('hide');
  $('#updateRssModal').modal('hide');
  $('#updateEpModal').modal('hide');
  $('#updateDateModal').modal('hide');
  $('#updateDescModal').modal('hide');
};


module.exports = {
  success,
  failure,
  getShowsSuccess,
  createShowSuccess,
  createShowFail,
  updateShowSuccess,
};
