// SAYF Gaming
(function () {
  // Years since the corp was founded on 19 Nov 2012. The HTML already says
  // thirteen, so the page is right without JavaScript; this keeps it right
  // after each birthday without anyone touching the site.
  var founded = Date.UTC(2012, 10, 19);
  var years = Math.floor((Date.now() - founded) / (365.2425 * 864e5));
  var words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
    'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen',
    'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty-one', 'twenty-two'];

  document.querySelectorAll('[data-years]').forEach(function (el) {
    el.textContent = String(years);
  });
  document.querySelectorAll('[data-years-word]').forEach(function (el) {
    var w = words[years] || String(years);
    el.textContent = el.hasAttribute('data-cap') ? w.charAt(0).toUpperCase() + w.slice(1) : w;
  });

  // Mobile menu.
  var toggle = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');
  if (!toggle || !nav) return;

  function setOpen(open) {
    nav.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  }
  toggle.addEventListener('click', function () {
    setOpen(!nav.classList.contains('is-open'));
  });
  nav.addEventListener('click', function (e) {
    if (e.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && nav.classList.contains('is-open')) {
      setOpen(false);
      toggle.focus();
    }
  });
})();
