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
  createShow,
  deleteShow,
  updateShow,
};
