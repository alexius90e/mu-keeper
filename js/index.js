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
    nextEl: '.main-event__controls-next',
    prevEl: '.main-event__controls-prev',
  },
});

const screenshotsSwiper = new Swiper('.screenshots .swiper', {
  slidesPerView: 4,
  spaceBetween: 14,
  navigation: {
    nextEl: '.screenshots__controls-next',
    prevEl: '.screenshots__controls-prev',
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

const mainEventCounters = document.querySelectorAll('.main-event__slide-start-counter');

mainEventCounters.forEach((counter) => {
  updateCounter(counter);

  setInterval(() => updateCounter(counter), 1000);
});

function updateCounter(counter) {
  const currentDate = new Date();
  const startDate = new Date(counter.dataset.start);
  let resultDelta = '';
  if (startDate - currentDate <= 0) resultDelta = '00:00:00:00';
  if (startDate - currentDate > 0) {
    const delta = Math.floor((startDate - currentDate) / 1000);

    const days = Math.floor(delta / 3600 / 24);
    const hours = Math.floor((delta - days * 24 * 3600) / 3600);
    const minutes = Math.floor((delta - days * 24 * 3600 - hours * 3600) / 60);
    const seconds = Math.floor(delta - days * 24 * 3600 - hours * 3600 - minutes * 60);

    const daysStr = days >= 10 ? days : `0${days}`;
    const hoursStr = hours >= 10 ? hours : `0${hours}`;
    const minutesStr = minutes >= 10 ? minutes : `0${minutes}`;
    const secondsStr = seconds >= 10 ? seconds : `0${seconds}`;

    resultDelta = `${daysStr}:${hoursStr}:${minutesStr}:${secondsStr}`;
  }

  counter.innerText = resultDelta;
}
