const toggles = document.querySelectorAll('.main-footer__toggle');
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
    toggles.forEach((btn, index) => {
      btn.classList.remove('main-footer__toggle--no-js');

      btn.addEventListener('click', (evt) => {
        evt.preventDefault();
        if (btn.classList.contains('main-footer__toggle--active')) {
          toggleBlock(blocks[index], btn);
        } else {
          closeLists();
          deactivateToggles();
          const maxHeight = blocks[index].style.maxHeight;
          blocks[index].style.maxHeight = (maxHeight) ? null : blocks[index].scrollHeight + 'px';
          toggleBlock(blocks[index], btn);
        }
      });
    });
  } else {
    blocks.forEach((element) => {
      element.style.maxHeight = null;
    });
  }
};

export {initAccordion};
