'use strict';

const store = require('../store');
//const app = require('./app');

const clear = (modal) => {
  setTimeout(function() {
    $(modal).modal('hide');
  }, 2000);
  $(modal).on('hidden.bs.modal', function() {
    $(this).find("input,textarea,select").val('').end();
    $('.modal-success').text('');
  });
};

const clearForm = (selector) => {
  $(selector).find("input,textarea,select").val('').end();
};


const signUpSuccess = () => {
  $('.modal-success').text("You may Login now.");
  clear('#sign-up-modal');
};

const success = () => {
  console.log();
  $('.messages').text('Success');
  clear('#signUp');
  clear('#changePass');
};

const signOutSuccess = () => {
  $('.modal-success').text("You Are Signed Out.");
  clear('#sign-out-modal');
  $('#reset').hide(500);
  $('.button-wrapper').hide(500);
  $('.title').hide(500);
  $('.message').hide();
  clear('#signOut');
};

const signInSuccess = (data) => {
  store.user = data.user;
  success(data);
  $('.title').show(500);
  $('.begin').hide(500);
  $('.proverb').show();
  clearForm('.sign-in-form');
  console.log(data);
};

const passSuccess = (data) => {
  $('.modal-success').text("Password Succesfully Changed.");
  clear('#change-password-modal');
};

const failure = (error) => {
  $('.messages').text('Authentication Failed.');
  clear('#signIn');
};


module.exports = {
  clear,
  clearForm,
  signUpSuccess,
  signInSuccess,
  signOutSuccess,
  passSuccess,
  failure,
  success,
};
