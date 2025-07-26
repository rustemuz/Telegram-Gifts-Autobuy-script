function showToast(message, duration = 4000) {
  let toast = document.createElement('div');
  toast.className = 'custom-toast';
  toast.textContent = message;
  document.body.append(toast);
  setTimeout(() => {
    toast.classList.add('visible');
  }, 50);
  setTimeout(() => {
    toast.classList.remove('visible');
    setTimeout(() => toast.remove(), 300);
  }, duration);
}

function log(message, ...optionalParams) {
  console.log(`[GiftsAutobuy] ${message}`, ...optionalParams);
}

function initSmoothScroll() {
  document.querySelectorAll('.nav-link[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const section = document.getElementById(targetId);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
        log('Скролл к секции', targetId);
      }
    });
  });
}

function initSectionObserver() {
  const options = { threshold: 0.2 };
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, options);
  document.querySelectorAll('section').forEach(sec => {
    sec.classList.add('pre-view');
    observer.observe(sec);
  });
}

function initButtons() {
  document.querySelectorAll('.btn-primary, .btn-success, .btn-info').forEach(btn => {
    btn.addEventListener('click', e => {
      const href = btn.getAttribute('href');
      log('Клик по ссылке', href);
      showToast(`Перехожу на ${href}`);
      setTimeout(() => window.location.href = href, 500);
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  log('DOM загружен, версия 2.2.0');
  initSmoothScroll();
  initSectionObserver();
  initButtons();
  setTimeout(() => showToast('Добро пожаловать в Gifts Autobuy!'), 3000);
});
