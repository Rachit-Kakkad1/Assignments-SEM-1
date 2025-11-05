

document.addEventListener('DOMContentLoaded', () => {

  const mainTabs = document.querySelectorAll('.main-tab');
  const panels = document.querySelectorAll('.panel-content');

  mainTabs.forEach(btn => {
    btn.addEventListener('click', () => {
      mainTabs.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');


      const target = btn.dataset.main;
      panels.forEach(p => {
        if (p.id === target) {
          p.classList.add('active');
          const firstSub = p.querySelector('.sub-panel, .option-content, .sub-panel');
          
        } else {
          p.classList.remove('active');
        }
      });
    });
  });

  
  const subLinks = document.querySelectorAll('.sub-link');
  const subPanels = document.querySelectorAll('.sub-panel');

  subLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      subLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      const target = link.dataset.sub;
      subPanels.forEach(sp => {
        if (sp.id === target) sp.classList.add('active');
        else sp.classList.remove('active');
      });
    });
  });

  const acctCards = document.querySelectorAll('.acct-card');
  acctCards.forEach(card => {
    card.addEventListener('click', () => {
      acctCards.forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
      // set radio
      const r = card.querySelector('input[type="radio"]');
      if (r) r.checked = true;
    });
  });

});
