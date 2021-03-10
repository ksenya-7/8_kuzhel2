import {setupModal} from '../utils/modal';

const modal = document.querySelector('.modal');
const modalButtons = document.querySelectorAll('.main-header__button');
const textInput = document.querySelector('.modal__content input[type="text"]');

const focusTextInput = () => {
  textInput.focus();
};

const initModals = () => {
  if (modal && modalButtons.length) {
    setupModal(modal, false, modalButtons, focusTextInput, false);
  }
};

export {initModals};
