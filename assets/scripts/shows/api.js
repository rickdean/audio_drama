'use strict';

const app = require('../app.js');
const store = require('../store.js');


const getShows = () => {
  return $.ajax({
    url: app.host + '/shows',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    }
  });
};

const displayShow = (data) => {
  let show_id = data.show.id;
  return $.ajax({
    url: app.host + '/projects/' + show_id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    }
  });
};


const createShow = (data) => {
  //let token = app.user.token;
  return $.ajax({
    url: app.host + '/shows',
    method: 'POST',
  headers: {
    Authorization: 'Token token=' + store.user.token,
    },
  data,
  });
};

const deleteShow = (id) => {
  return $.ajax({
    url: app.host + '/shows/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    }
  });
};

const updateShow = (data, id) => {
  return $.ajax({
    url: app.host + '/shows/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token,
    },
    data,
  });
};


module.exports = {
  getShows,
  displayShow,
  createShow,
  deleteShow,
  updateShow,
};
