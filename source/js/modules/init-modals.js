import {setupModal} from '../utils/modal';

const modal = document.querySelector('.modal');
const modalBtns = document.querySelectorAll('.main-header__button');
const textInput = document.querySelector('.modal__content input[type="text"]');

const focusTextInput = () => {
  textInput.focus();
};

const initModals = () => {
  if (modal && modalBtns.length) {
    setupModal(modal, false, modalBtns, focusTextInput, false);
  }
};

export {initModals};
