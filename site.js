// SAYF Gaming — window tabs. Each tab is addressable (#roster, #join) so a
// link can point straight at one, the way a client window remembers its tab.
(function () {
  var tabs = [].slice.call(document.querySelectorAll('.tab'));
  var panels = [].slice.call(document.querySelectorAll('.panel'));
  if (!tabs.length) return;

  function known(id) {
    return tabs.some(function (t) { return t.dataset.tab === id; });
  }

  function show(id, writeHash) {
    tabs.forEach(function (t) {
      var on = t.dataset.tab === id;
      t.setAttribute('aria-selected', on ? 'true' : 'false');
      t.tabIndex = on ? 0 : -1;
    });
    panels.forEach(function (p) { p.hidden = p.id !== 'panel-' + id; });
    if (writeHash && window.history.replaceState) {
      window.history.replaceState(null, '', '#' + id);
    }
  }

  tabs.forEach(function (tab, i) {
    tab.addEventListener('click', function () { show(tab.dataset.tab, true); });
    tab.addEventListener('keydown', function (e) {
      var step = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
      if (!step) return;
      e.preventDefault();
      var next = tabs[(i + step + tabs.length) % tabs.length];
      next.focus();
      show(next.dataset.tab, true);
    });
  });

  var start = window.location.hash.replace('#', '');
  show(known(start) ? start : tabs[0].dataset.tab, false);

  window.addEventListener('hashchange', function () {
    var id = window.location.hash.replace('#', '');
    if (known(id)) show(id, false);
  });
})();
