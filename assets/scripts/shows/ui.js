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
  console.log(shows);
};

// const getShowsSuccess = (shows) => {
// console.log('show us the ', shows);
// $('#content').html(showShowsTemplate(shows));
// };

const createShowSuccess = (data) => {
  console.log(data);
  $("#addBox").hide();
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
