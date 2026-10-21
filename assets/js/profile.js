(() => {
  const controls = document.querySelector('.publication-controls');
  const buttons = [...document.querySelectorAll('[data-filter]')];
  const publications = [...document.querySelectorAll('.publication')];
  const count = document.getElementById('publication-count');
  if (!controls || !count) return;
  controls.hidden = false;
  function applyFilter(kind) {
    let visible = 0;
    publications.forEach(publication => {
      publication.hidden = kind !== 'all' && publication.dataset.kind !== kind;
      if (!publication.hidden) visible += 1;
    });
    buttons.forEach(button => {
      const active = button.dataset.filter === kind;
      button.classList.toggle('active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    count.textContent = `${visible} ${visible === 1 ? 'publication' : 'publications'}`;
  }
  buttons.forEach(button => button.addEventListener('click', () => applyFilter(button.dataset.filter)));
  // Research links must still reveal a paper when a publication filter is active.
  function revealLinkedPublication() {
    const target = document.getElementById(window.location.hash.slice(1));
    if (target && target.matches('.publication') && target.hidden) {
      applyFilter('all');
      target.scrollIntoView({block:'start'});
    }
  }
  window.addEventListener('hashchange', revealLinkedPublication);
  document.querySelectorAll('a[href^="#pub-"]').forEach(link => link.addEventListener('click', () => applyFilter('all')));
  revealLinkedPublication();
})();
