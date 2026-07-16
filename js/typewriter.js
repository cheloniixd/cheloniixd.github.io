(function () {
  const words = [
    'Client Portals + Invoicing Workflows',
    'DevOps Automation + Reliable Deployments',
    'Security Playbooks + Hardening',
    'Marketing Frontends That Convert'
  ];

  const target = document.getElementById('typewriter');
  if (!target) return;

  let wi = 0;
  let ci = 0;
  let deleting = false;

  function tick() {
    const current = words[wi];

    if (!deleting) {
      ci++;
      target.textContent = current.slice(0, ci);
      if (ci === current.length) {
        deleting = true;
        setTimeout(tick, 1200);
        return;
      }
      setTimeout(tick, 45);
    } else {
      ci--;
      target.textContent = current.slice(0, ci);
      if (ci === 0) {
        deleting = false;
        wi = (wi + 1) % words.length;
      }
      setTimeout(tick, 24);
    }
  }

  tick();
})();
