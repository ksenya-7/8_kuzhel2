import {validity} from './validity';

const textInput = document.querySelector('.modal__form input[type="text"]');
const telInput = document.querySelector('.modal__form input[type="tel"]');
const message = document.querySelector('.modal__form textarea');
const buttonSubmit = document.querySelector('.modal__button');
const form = document.querySelector('.modal form');

const initFormModalValidity = () => {
  validity(textInput, telInput, message, buttonSubmit, form);
};

export {initFormModalValidity};
