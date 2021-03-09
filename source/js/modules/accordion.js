const toggles = document.querySelectorAll('.main-footer__toggle.main-footer__toggle');
const blocks = document.querySelectorAll('.main-footer__hide-block');
const breakpointLg = window.matchMedia('(max-width: 768px)');

const closeLists = () => {
  blocks.forEach((element) => {
    element.classList.remove('main-footer__hide-block--js');
    element.style.maxHeight = 0;
  });
};

const deactivateToggles = () => {
  toggles.forEach((element) => {
    element.classList.remove('main-footer__toggle--active');
  });
};

const toggleBlock = (block, toggle) => {
  block.classList.toggle('main-footer__hide-block--js');
  toggle.classList.toggle('main-footer__toggle--active');
};

const initAccordion = () => {
  if (breakpointLg.matches) {
    closeLists();
    deactivateToggles();
    for (let i = 0; i < toggles.length; i++) {
      toggles[i].classList.remove('main-footer__toggle--no-js');

      toggles[i].addEventListener('click', (evt) => {
        evt.preventDefault();
        if (toggles[i].classList.contains('main-footer__toggle--active')) {
          toggleBlock(blocks[i], toggles[i]);
        } else {
          closeLists();
          deactivateToggles();
          const maxHeight = blocks[i].style.maxHeight;
          blocks[i].style.maxHeight = (maxHeight) ? null : blocks[i].scrollHeight + 'px';
          toggleBlock(blocks[i], toggles[i]);
        }
      });
    }
  } else {
    blocks.forEach((element) => {
      element.style.maxHeight = null;
    });
  }
};

export {initAccordion};
