(function () {
  const cards = document.querySelectorAll('.tilt-card');
  const maxTilt = 9;

  cards.forEach((card) => {
    let inner = card.querySelector(':scope > .tilt-inner');
    if (!inner) {
      inner = document.createElement('div');
      inner.className = 'tilt-inner';
      while (card.firstChild) {
        inner.appendChild(card.firstChild);
      }
      card.appendChild(inner);
    }

    let frameId = null;
    let pendingEvent = null;

    inner.style.transformStyle = 'preserve-3d';

    function onMove(e) {
      pendingEvent = e;
      if (frameId) return;

      frameId = requestAnimationFrame(() => {
        frameId = null;
        if (!pendingEvent) return;

        const rect = card.getBoundingClientRect();
        const x = Math.min(Math.max((pendingEvent.clientX - rect.left) / rect.width, 0), 1);
        const y = Math.min(Math.max((pendingEvent.clientY - rect.top) / rect.height, 0), 1);

        const rotateY = (x - 0.5) * (maxTilt * 2);
        const rotateX = (0.5 - y) * (maxTilt * 2);

        inner.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-2px)`;
      });
    }

    function onLeave() {
      pendingEvent = null;
      if (frameId) {
        cancelAnimationFrame(frameId);
        frameId = null;
      }

      inner.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg) translateY(0)';
    }

    card.addEventListener('mousemove', onMove);
    card.addEventListener('mouseleave', onLeave);
  });
})();
