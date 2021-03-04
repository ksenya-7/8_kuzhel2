import {validity} from './validity';

const textInput = document.querySelector('.feedback__form input[type="text"]');
const telInput = document.querySelector('.feedback__form input[type="tel"]');
const message = document.querySelector('.feedback__form textarea');
const buttonSubmit = document.querySelector('.feedback__button');
const form = document.querySelector('.feedback form');

const formValidity = () => {
  validity(textInput, telInput, message, buttonSubmit, form);
};

export {formValidity};
