const moveTo = new window.MoveTo({
  duration: 800,
  easing: 'easeOutQuart',
});

const initScroll = () => {
  const anchors = document.querySelectorAll('.js-trigger');
  if (anchors.length) {
    anchors.forEach((anchor) => {
      moveTo.registerTrigger(anchor);
    });
  }
};

export {initScroll};
