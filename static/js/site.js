const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const expanded = navToggle.getAttribute('aria-expanded') === 'true';
    navToggle.setAttribute('aria-expanded', String(!expanded));
    navLinks.classList.toggle('is-open', !expanded);
  });

  navLinks.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      navToggle.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('is-open');
    }
  });
}

const projectFilterButtons = document.querySelectorAll('[data-project-filter]');
const projectCards = document.querySelectorAll('[data-project-card]');

if (projectFilterButtons.length && projectCards.length) {
  const applyProjectFilter = (filter) => {
    projectCards.forEach((card) => {
      const tags = (card.getAttribute('data-project-tags') || '').split(' ');
      card.hidden = filter !== 'all' && !tags.includes(filter);
    });
  };

  projectFilterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-project-filter') || 'featured';

      projectFilterButtons.forEach((item) => {
        const isActive = item === button;
        item.classList.toggle('is-active', isActive);
        item.setAttribute('aria-pressed', String(isActive));
      });

      applyProjectFilter(filter);
    });
  });
  applyProjectFilter('featured');
}
