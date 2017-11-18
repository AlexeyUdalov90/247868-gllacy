'use strict';

var btnFeedback = document.querySelector('.button-feedback');
var popupFeedback = document.querySelector('.modal-feedback');
var closeFeedback = document.querySelector('.modal-feedback .close');
var overlay = document.querySelector('.modal-overlay');
var linkLogin = document.querySelector('.link-login');
var formLogin = document.querySelector('.login-form');
var login = formLogin.querySelector('[name=login]');
var password = formLogin.querySelector('[name=password]');

var submenu = document.querySelector('.site-submenu');
var submenuLinks = submenu.querySelectorAll('a');

var searchBlock = document.querySelector('.link-search + .hover-block');
var formItemsSearch = searchBlock.querySelectorAll('form *');

var loginBlock = document.querySelector('.link-login + .hover-block');
var formItemsLogin = loginBlock.querySelectorAll('form *');

var basketBlock = document.querySelector('.link-basket + .basket');
var basketItems = document.querySelectorAll('.basket *');


var storage = localStorage.getItem('login');

linkLogin.addEventListener('click', function (evt) {
  evt.preventDefault();
});

linkLogin.addEventListener('mouseover', function (evt) {
  evt.preventDefault();
  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
});

formLogin.addEventListener('submit', function (evt) {
  if (login.value && password.value) {
    evt.preventDefault();
    localStorage.setItem('login', login.value);
  }
});

function openFeedback() {
  popupFeedback.classList.add('modal-feedback-show');
  overlay.classList.add('modal-show');
}

function closeUpFeedback() {
  popupFeedback.classList.remove('modal-feedback-show');
  overlay.classList.remove('modal-show');
}

if (btnFeedback) {
  btnFeedback.addEventListener('click', function (evt) {
    evt.preventDefault();
    openFeedback();
  });

  closeFeedback.addEventListener('click', function (evt) {
    evt.preventDefault();
    closeUpFeedback();
  });

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      if (popupFeedback.classList.contains('modal-feedback-show')) {
        closeUpFeedback();
      }
    }
  });
}

submenuLinks.forEach(function (item) {
  item.addEventListener('focus', function () {
    submenu.classList.add('submenu-show');
  });
  item.addEventListener('blur', function () {
    submenu.classList.remove('submenu-show');
  });
});

formItemsSearch.forEach(function (item) {
  item.addEventListener('focus', function () {
    searchBlock.classList.add('hover-block-show');
  });

  item.addEventListener('blur', function () {
    searchBlock.classList.remove('hover-block-show');
  });
});

formItemsLogin.forEach(function (item) {
  item.addEventListener('focus', function () {
    loginBlock.classList.add('hover-block-show');
  });

  item.addEventListener('blur', function () {
    loginBlock.classList.remove('hover-block-show');
  });
});

if (basketBlock) {
  basketItems.forEach(function (item) {
    item.addEventListener('focus', function () {
      basketBlock.classList.add('basket-show');
    });

    item.addEventListener('blur', function () {
      basketBlock.classList.remove('basket-show');
    });
  });
}
