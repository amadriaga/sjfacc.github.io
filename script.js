// South Jersey Fil-American Chess Club — site behaviour
(function () {
  // Mobile menu
  var toggle = document.querySelector('.menu-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      var open = links.classList.toggle('is-open');
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Footer year
  var year = document.querySelector('[data-year]');
  if (year) year.textContent = new Date().getFullYear();

  // Registration form
  var form = document.getElementById('register-form');
  if (!form) return;

  var age = form.querySelector('#age');
  var guardian = form.querySelector('#guardian-field');
  var guardianInput = form.querySelector('#guardian');
  function syncGuardian() {
    var minor = age && (age.value === 'under-12' || age.value === '12-17');
    guardian.classList.toggle('hidden', !minor);
    guardianInput.required = !!minor;
  }
  if (age && guardian) { age.addEventListener('change', syncGuardian); syncGuardian(); }

  // Until a real Formspree form ID is set in the form's action, don't submit.
  form.addEventListener('submit', function (e) {
    if (form.getAttribute('action').indexOf('FORM_ID_PENDING') !== -1) {
      e.preventDefault();
      var notice = document.getElementById('form-notice');
      notice.classList.add('is-visible');
      notice.focus();
    }
  });
})();
