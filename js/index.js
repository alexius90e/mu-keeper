import './custom-select.js';

const sidebarAccordeonElems = document.querySelectorAll('.sidebar__server-card');

sidebarAccordeonElems.forEach((accordeon) => {
  const panel = accordeon.querySelector('.sidebar__server-card-panel');

  if (panel && accordeon.classList.contains('active')) {
    panel.style.maxHeight = panel.scrollHeight + 'px';
  }

  accordeon.addEventListener('click', (event) => {
    event.currentTarget.classList.toggle('active');

    if (panel) {
      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
      } else {
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    }
  });
});

const mainEventSwiper = new Swiper('.main-event .swiper', {
  slidesPerView: 'auto',
  navigation: {
    nextEl: '.main-event__controls-prev',
    prevEl: '.main-event__controls-next',
  },
});

const screenshotsSwiper = new Swiper('.screenshots .swiper', {
  slidesPerView: 4,
  spaceBetween: 14,
  navigation: {
    nextEl: '.screenshots__controls-prev',
    prevEl: '.screenshots__controls-next',
  },
});

Fancybox.bind('[data-fancybox="screenshots"]', {
  Toolbar: {
    display: {
      left: [],
      middle: [],
      right: [],
    },
  },
  Thumbs: {
    showOnStart: false,
  },
  Carousel: {
    showOnStart: false,
  },
});
