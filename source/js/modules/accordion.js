const toggles = document.querySelectorAll('.main-footer__toggle.main-footer__toggle');
const blocks = document.querySelectorAll('.main-footer__hide-block');

const closeLists = () => {
  if (blocks) {
    blocks.forEach((element) => {
      element.classList.add('main-footer__hide-block--js');
    });
  }
};

const deactiveToggles = () => {
  if (toggles) {
    toggles.forEach((element) => {
      element.classList.remove('main-footer__toggle--active');
    });
  }
};

const toggleBlock = (block, toggle) => {
  block.classList.toggle('main-footer__hide-block--js');
  toggle.classList.toggle('main-footer__toggle--active');
};

const initAccordion = () => {
  closeLists();
  deactiveToggles();
  for (let i = 0; i < toggles.length; i++) {
    toggles[i].classList.remove('main-footer__toggle--nojs');

    toggles[i].addEventListener('click', (evt) => {
      evt.preventDefault();
      if (toggles[i].classList.contains('main-footer__toggle--active')) {
        toggleBlock(blocks[i], toggles[i]);
      } else {
        closeLists();
        deactiveToggles();
        toggleBlock(blocks[i], toggles[i]);
      }
    });
  }
};

export {initAccordion};
