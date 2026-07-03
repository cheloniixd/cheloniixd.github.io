(function () {
  // Experience slider
  const expTrack = document.getElementById('expTrack');
  const expPrev = document.getElementById('expPrev');
  const expNext = document.getElementById('expNext');

  if (expTrack && expPrev && expNext) {
    const expSlides = expTrack.children.length;
    let expIndex = 0;

    const goExp = (i) => {
      expIndex = (i + expSlides) % expSlides;
      expTrack.style.transform = `translateX(-${expIndex * 100}%)`;
    };

    expPrev.addEventListener('click', () => goExp(expIndex - 1));
    expNext.addEventListener('click', () => goExp(expIndex + 1));

    setInterval(() => goExp(expIndex + 1), 4200);
  }

  // Testimonials slider
  const testimonialTrack = document.getElementById('testimonialTrack');
  const testimonialDots = document.getElementById('testimonialDots');

  if (testimonialTrack && testimonialDots) {
    const slides = [...testimonialTrack.children];
    let index = 0;

    const dots = slides.map((_, i) => {
      const d = document.createElement('button');
      d.className = 'dot' + (i === 0 ? ' active' : '');
      d.setAttribute('aria-label', `Go to testimonial ${i + 1}`);
      d.addEventListener('click', () => go(i));
      testimonialDots.appendChild(d);
      return d;
    });

    function go(i) {
      index = (i + slides.length) % slides.length;
      testimonialTrack.style.transform = `translateX(-${index * 100}%)`;
      dots.forEach((dot, di) => dot.classList.toggle('active', di === index));
      resetTimer();
    }

    let timer;
    function resetTimer() {
      clearInterval(timer);
      timer = setInterval(() => go(index + 1), 5000);
    }

    resetTimer();
  }
})();
