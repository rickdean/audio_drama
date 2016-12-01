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
  console.log(shows);
};


const createShowSuccess = (data) => {
  console.log(data);
  $("#addBox").hide();
  $(".bigMessage").text("Show Created!");
};

const createShowFail = () => {
};

const updateShowSuccess = () => {
  clearInputField();
  $('#updateShowModal').modal('hide');
};


module.exports = {
  success,
  failure,
  getShowsSuccess,
  createShowSuccess,
  createShowFail,
  updateShowSuccess,
};
