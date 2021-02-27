const toggles = document.querySelectorAll('.main-footer__toggle.main-footer__toggle');
const blocks = document.querySelectorAll('.main-footer__hide-block');

const initAccordion = () => {
  if (toggles && blocks) {
    for (let i = 0; i < toggles.length; i++) {
      toggles[i].classList.remove('main-footer__toggle--nojs');

      toggles[i].addEventListener('click', (evt) => {
        evt.preventDefault();
        blocks[i].classList.toggle('main-footer__hide-block--js');
        toggles[i].classList.toggle('main-footer__toggle--active');
      });
    }
  }
};

export {initAccordion};
