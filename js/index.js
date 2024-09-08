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
