// South Jersey Filipino-American Chess Club — site behaviour
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

  // Parent / guardian section: shown and required only when the date of birth makes the member under 18.
  var dob = form.querySelector('#f-date_of_birth');
  var guardian = document.getElementById('guardian-section');
  var guardianInputs = form.querySelectorAll('[data-guardian]');
  function isMinor() {
    if (!dob || !dob.value) return false;
    var b = new Date(dob.value + 'T00:00:00'), now = new Date();
    var age = now.getFullYear() - b.getFullYear();
    if (now.getMonth() < b.getMonth() || (now.getMonth() === b.getMonth() && now.getDate() < b.getDate())) age--;
    return age < 18;
  }
  function syncGuardian() {
    var minor = isMinor();
    if (guardian) guardian.classList.toggle('hidden', !minor);
    for (var i = 0; i < guardianInputs.length; i++) guardianInputs[i].required = minor;
  }
  if (dob && guardian) { dob.addEventListener('change', syncGuardian); dob.addEventListener('input', syncGuardian); syncGuardian(); }

  // Signature dates default to today (local date).
  var d = new Date(), today = d.getFullYear() + '-' + ('0' + (d.getMonth() + 1)).slice(-2) + '-' + ('0' + d.getDate()).slice(-2);
  ['#f-member_date', '#f-guardian_date'].forEach(function (sel) { var el = form.querySelector(sel); if (el && !el.value) el.value = today; });

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
