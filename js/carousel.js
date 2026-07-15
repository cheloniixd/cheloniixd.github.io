(function () {
  // Tech stack marquee
  const skillsTrack = document.getElementById('skillsTrack');

  if (skillsTrack) {
    const skills = [
      { name: 'JavaScript', icon: 'javascript/javascript-plain' },
      { name: 'Python', icon: 'python/python-original' },
      { name: 'Ruby', icon: 'ruby/ruby-original' },
      { name: 'Java', icon: 'java/java-original' },
      { name: 'C++', icon: 'cplusplus/cplusplus-original' },
      { name: 'Node.js', icon: 'nodejs/nodejs-original' },
      { name: 'Rails', icon: 'rails/rails-original-wordmark' },
      { name: 'Flask', icon: 'flask/flask-original' },
      { name: 'React.js', icon: 'react/react-original' },
      { name: 'MySQL', icon: 'mysql/mysql-original-wordmark' },
      { name: 'PostgreSQL', icon: 'postgresql/postgresql-original' },
      { name: 'MongoDB', icon: 'mongodb/mongodb-original' },
      { name: 'Docker', icon: 'docker/docker-original' },
      { name: 'Kubernetes', icon: 'kubernetes/kubernetes-original' },
      { name: 'NGINX', icon: 'nginx/nginx-original' },
      { name: 'Postman', icon: 'postman/postman-original' },
    ];

    const skillsMarkup = skills.map((skill) => `
      <span class="tech-icon">
        <img class="skills-img" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${skill.icon}.svg" alt="${skill.name}" loading="lazy" />
        <small>${skill.name}</small>
      </span>
    `).join('');

    skillsTrack.innerHTML = skillsMarkup + skillsMarkup;
  }

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

  // Featured work rail
  const projectRail = document.getElementById('projectRail');
  const projectPrev = document.getElementById('projectPrev');
  const projectNext = document.getElementById('projectNext');
  const projectTitle = document.getElementById('projectTitle');
  const projectBadge = document.getElementById('projectBadge');
  const projectImage = document.getElementById('projectImage');
  const projectDescription = document.getElementById('projectDescription');
  const projectBullets = document.getElementById('projectBullets');
  const projectLink = document.getElementById('projectLink');

  const projects = [
    {
      title: 'Computer Anything',
      badge: 'Brand Site',
      image: 'assets/img/portfolio/computeranything.jpg',
      alt: 'Computer Anything project preview',
      description: 'Personal brand and portfolio landing page focused on clarity, trust, and conversion.',
      bullets: ['Responsive hero and section system', 'Clear value proposition hierarchy', 'Built to present work and contact info fast'],
      link: null,
    },
    {
      title: 'Clonebnb',
      badge: 'Product UI',
      image: 'assets/img/portfolio/clonebnb.jpg',
      alt: 'Clonebnb project preview',
      description: 'Booking-style interface concept with a polished, app-like presentation and strong visual rhythm.',
      bullets: ['Card-based discovery flow', 'Responsive product layout', 'Designed for quick visual scanning'],
      link: null,
    },
    {
      title: 'Cryptograph',
      badge: 'Security / Data',
      image: 'assets/img/portfolio/cryptograph.jpg',
      alt: 'Cryptograph project preview',
      description: 'Security-themed visual work with a technical, information-rich feel and a darker aesthetic.',
      bullets: ['High-contrast data-forward styling', 'Compact information blocks', 'Built to feel serious and technical'],
      link: null,
    },
    {
      title: 'MAH',
      badge: 'Portfolio Piece',
      image: 'assets/img/portfolio/mah.jpg',
      alt: 'MAH project preview',
      description: 'Minimal portfolio visual that keeps the focus on layout, typography, and composition.',
      bullets: ['Simple structure', 'Typography-first layout', 'Designed to showcase polish'],
      link: null,
    },
    {
      title: 'Stuck Over Clone',
      badge: 'UI Clone',
      image: 'assets/img/portfolio/stuckoverclone.jpg',
      alt: 'Stuck Over Clone project preview',
      description: 'A clone study built to sharpen frontend precision, spacing, and interaction detail.',
      bullets: ['Focus on fidelity', 'Recreated spacing and hierarchy', 'Good for proving UI discipline'],
      link: null,
    },
    {
      title: 'Todo App',
      badge: 'Utility App',
      image: 'assets/img/portfolio/todo_app.jpg',
      alt: 'Todo App project preview',
      description: 'Simple productivity app concept with a clean interface and a straightforward task flow.',
      bullets: ['Easy-to-scan controls', 'Useful small-screen layout', 'Minimal but practical UX'],
      link: null,
    },
  ];

  projects.forEach((project) => {
    if (!project.images) project.images = [project.image];
  });

  const projectDetailsBtn = document.getElementById('projectDetailsBtn');
  const projectModal = document.getElementById('projectModal');
  const projectModalBackdrop = document.getElementById('projectModalBackdrop');
  const projectModalClose = document.getElementById('projectModalClose');
  const modalImage = document.getElementById('modalImage');
  const modalPrevImg = document.getElementById('modalPrevImg');
  const modalNextImg = document.getElementById('modalNextImg');
  const modalDots = document.getElementById('modalDots');
  const modalProjectTitle = document.getElementById('modalProjectTitle');
  const modalProjectBadge = document.getElementById('modalProjectBadge');
  const modalProjectDescription = document.getElementById('modalProjectDescription');
  const modalProjectBullets = document.getElementById('modalProjectBullets');
  const modalProjectLink = document.getElementById('modalProjectLink');

  if (projectRail && projectPrev && projectNext && projectTitle && projectBadge && projectImage && projectDescription && projectBullets && projectLink) {
    let projectIndex = 0;

    projectRail.innerHTML = projects.map((item, index) => `
      <article class="project-rail-card" data-project-index="${index}" aria-label="${item.title}">
        <img src="${item.image}" alt="${item.alt}" loading="lazy" />
        <div class="rail-meta">
          <h4>${item.title}</h4>
        </div>
      </article>
    `).join('');

    const railCards = [...projectRail.querySelectorAll('[data-project-index]')];

    const renderProject = () => {
      const project = projects[projectIndex];

      projectTitle.textContent = project.title;
      projectBadge.textContent = project.badge;
      projectImage.src = project.image;
      projectImage.alt = project.alt;
      projectDescription.textContent = project.description;
      projectBullets.innerHTML = project.bullets.map((bullet) => `<li>${bullet}</li>`).join('');

      if (project.link) {
        projectLink.href = project.link;
        projectLink.hidden = false;
      } else {
        projectLink.hidden = true;
      }

      railCards.forEach((card, index) => {
        const isActive = index === projectIndex;
        card.classList.toggle('is-active', isActive);
        if (isActive) {
          const target = card.offsetLeft - (projectRail.clientWidth - card.clientWidth) / 2;
          projectRail.scrollTo({ left: target, behavior: 'smooth' });
        }
      });
    };

    railCards.forEach((card) => {
      card.addEventListener('click', () => {
        projectIndex = Number(card.getAttribute('data-project-index'));
        renderProject();
      });
    });

    const goProject = (nextIndex) => {
      projectIndex = (nextIndex + projects.length) % projects.length;
      renderProject();
    };

    projectPrev.addEventListener('click', () => goProject(projectIndex - 1));
    projectNext.addEventListener('click', () => goProject(projectIndex + 1));

    renderProject();
    setInterval(() => goProject(projectIndex + 1), 5200);

    if (projectDetailsBtn && projectModal && projectModalBackdrop && projectModalClose && modalImage && modalPrevImg && modalNextImg && modalDots && modalProjectTitle && modalProjectBadge && modalProjectDescription && modalProjectBullets && modalProjectLink) {
      let galleryIndex = 0;
      let lastFocused = null;

      const renderGallery = () => {
        const project = projects[projectIndex];
        const images = project.images;

        modalImage.src = images[galleryIndex];
        modalImage.alt = project.alt;

        modalDots.innerHTML = images.map((_, i) => `<button class="project-modal-dot${i === galleryIndex ? ' active' : ''}" data-img-index="${i}" aria-label="Screenshot ${i + 1}"></button>`).join('');
        modalDots.querySelectorAll('[data-img-index]').forEach((dot) => {
          dot.addEventListener('click', () => {
            galleryIndex = Number(dot.getAttribute('data-img-index'));
            renderGallery();
          });
        });

        const hasMultiple = images.length > 1;
        modalPrevImg.hidden = !hasMultiple;
        modalNextImg.hidden = !hasMultiple;
        modalDots.hidden = !hasMultiple;
      };

      const renderModal = () => {
        const project = projects[projectIndex];

        galleryIndex = 0;
        renderGallery();

        modalProjectTitle.textContent = project.title;
        modalProjectBadge.textContent = project.badge;
        modalProjectDescription.textContent = project.description;
        modalProjectBullets.innerHTML = project.bullets.map((bullet) => `<li>${bullet}</li>`).join('');

        if (project.link) {
          modalProjectLink.href = project.link;
          modalProjectLink.hidden = false;
        } else {
          modalProjectLink.hidden = true;
        }
      };

      const openModal = () => {
        lastFocused = document.activeElement;
        renderModal();
        projectModal.hidden = false;
        document.body.style.overflow = 'hidden';
        projectModalClose.focus();
      };

      const closeModal = () => {
        projectModal.hidden = true;
        document.body.style.overflow = '';
        if (lastFocused) lastFocused.focus();
      };

      const goGallery = (nextIndex) => {
        const images = projects[projectIndex].images;
        galleryIndex = (nextIndex + images.length) % images.length;
        renderGallery();
      };

      projectDetailsBtn.addEventListener('click', openModal);
      projectModalClose.addEventListener('click', closeModal);
      projectModalBackdrop.addEventListener('click', closeModal);
      modalPrevImg.addEventListener('click', () => goGallery(galleryIndex - 1));
      modalNextImg.addEventListener('click', () => goGallery(galleryIndex + 1));

      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !projectModal.hidden) closeModal();
      });
    }
  }
})();
