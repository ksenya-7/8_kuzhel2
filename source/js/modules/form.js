import {initValidity} from './validity';

const textInput = document.querySelector('.feedback__form input[type="text"]');
const telInput = document.querySelector('.feedback__form input[type="tel"]');
const message = document.querySelector('.feedback__form textarea');
const buttonSubmit = document.querySelector('.feedback__button');
const checkBox = document.querySelector('.feedback__form input[type="checkbox"]');
const label = document.querySelector('.feedback__field label');
const form = document.querySelector('.feedback form');

const initFormValidity = () => {
  initValidity(textInput, telInput, message, buttonSubmit, checkBox, label, form);
};

export {initFormValidity};
