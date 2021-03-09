import {initValidity} from './validity';

const textInput = document.querySelector('.modal__content input[type="text"]');
const telInput = document.querySelector('.modal__content input[type="tel"]');
const message = document.querySelector('.modal__content textarea');
const buttonSubmit = document.querySelector('.modal__button');
const form = document.querySelector('.modal form');

const initFormModalValidity = () => {
  initValidity(textInput, telInput, message, buttonSubmit, form);
};

export {initFormModalValidity};
