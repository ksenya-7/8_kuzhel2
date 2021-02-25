const body = document.querySelector('body');
const nav = document.querySelector('.page-header__nav');
const navToggle = document.querySelector('.page-header__toggle');
const navClose = document.querySelector('.page-header__btn-close');
const links = document.querySelectorAll('.site-list__link');
const logo = document.querySelector('.page-header__logo');

const modal = document.querySelector('.modal');
const modalBuyButtons = document.querySelectorAll('.btn--js');
const modalClose = modal.querySelector('.modal__close-button');

const modalPhone = modal.querySelector('.modal__input--tel');
const modalMail = document.querySelector('.modal__input--mail');
const modalOverlay = modal.querySelector('.modal__overlay');

const success = document.querySelector('.success');
const successClose = success.querySelector('.success__close-button');
const successOverlay = success.querySelector('.success__overlay');

const forms = document.querySelectorAll('form');

const initNav = () => {
  if (nav) {
    nav.classList.remove('page-header__nav--nojs');
    nav.classList.remove('main-nav--open');
    logo.classList.remove('page-header__logo--nojs');
    navToggle.classList.remove('page-header__toggle--active');
    navClose.classList.add('page-header__btn-close--js');
  }

  if (navToggle) {
    navToggle.addEventListener('click', function (evt) {
      evt.preventDefault();
      nav.classList.toggle('main-nav--open');
      navToggle.classList.toggle('page-header__toggle--active');
      logo.classList.toggle('page-header__logo--hide');
    });
  }

  if (links) {
    links.forEach(function (element) {
      element.addEventListener('click', function () {
        body.classList.remove('scroll-lock');
        nav.classList.toggle('main-nav--open');
        navToggle.classList.toggle('page-header__toggle--active');
        logo.classList.toggle('page-header__logo--hide');
      });
    });
  }
};


const initModals = () => {
  const openModal = function () {
    modal.classList.add('modal--active');
    document.querySelector('body').classList.add('modal--open');
  };

  const closeModal = function () {
    modal.classList.remove('modal--active');
    document.querySelector('body').classList.remove('modal--open');
    modalPhone.value = '';
    modalMail.value = '';
  };

  if (modalBuyButtons) {
    for (let i = 0; i < modalBuyButtons.length; i++) {
      modalBuyButtons[i].addEventListener('click', function (evt) {
        evt.preventDefault();
        openModal();
        modalPhone.focus();
      });
    }
  }

  modalClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    closeModal();
  });

  modalOverlay.addEventListener('click', function (evt) {
    evt.preventDefault();
    closeModal();
  });

  window.addEventListener('keydown', function (evt) {
    evt.preventDefault();
    if (evt.key === 'Escape') {
      closeModal();
    }
  });


  const openSuccess = function () {
    success.classList.add('success--active');
    document.querySelector('body').classList.add('success--open');
  };

  const closeSuccess = function () {
    success.classList.remove('success--active');
    document.querySelector('body').classList.remove('success--open');
  };

  successClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    closeSuccess();
  });

  successOverlay.addEventListener('click', function (evt) {
    evt.preventDefault();
    closeSuccess();
  });

  window.addEventListener('keydown', function (evt) {
    evt.preventDefault();
    if (evt.key === 'Escape') {
      closeSuccess();
    }
  });

  if (forms) {
    for (let j = 0; j < forms.length; j++) {
      forms[j].addEventListener('submit', function (evt) {
        evt.preventDefault();
        openSuccess();
        closeModal();
      });
    }
  }
};

export {initNav, initModals};
