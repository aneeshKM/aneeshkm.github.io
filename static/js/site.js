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

const emailCopyButton = document.querySelector('[data-copy-email]');

if (emailCopyButton) {
  const copyLabel = emailCopyButton.querySelector('[data-copy-label]');
  const originalLabel = copyLabel ? copyLabel.textContent : 'Click to copy';

  const writeClipboard = (text) => {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text);
    }

    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.setAttribute('readonly', '');
    textarea.style.position = 'fixed';
    textarea.style.top = '-999px';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    textarea.remove();
    return Promise.resolve();
  };

  emailCopyButton.addEventListener('click', () => {
    const email = emailCopyButton.getAttribute('data-copy-email');

    if (!email || !copyLabel) {
      return;
    }

    writeClipboard(email).then(() => {
      copyLabel.textContent = 'Copied';
      window.setTimeout(() => {
        copyLabel.textContent = originalLabel;
      }, 1600);
    });
  });
}
