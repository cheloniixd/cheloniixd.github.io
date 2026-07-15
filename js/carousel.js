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
      image: 'assets/img/portfolio/computer_anything.png',
      alt: 'Computer Anything project preview',
      description: "Bring your vision online, and let us handle the rest. Whether it's a powerful website, custom web application, or full-stack hosting solution, Computer Anything LLC builds and maintains it all. From backend engineering and database management to secure, reliable hosting and ongoing support, we've got you covered.",
      bullets: ['Responsive hero and section system', 'Clear value proposition hierarchy', 'Built to present work and contact info fast'],
      link: 'https://computeranything.dev/',
    },
    {
      title: 'Wholesale Hub',
      badge: 'SaaS / B2B',
      image: 'assets/img/portfolio/wholesale_hub.png',
      alt: 'Wholesale Hub project preview',
      description: "An all-in-one wholesale ordering platform built for businesses that are done with spreadsheets and phone calls. Get your full catalog online in days, whether you embed it into your existing site, use the built-in storefront builder, or have us build something custom. Your customers get a modern self-service experience; you get real-time orders, automatic tracking, backorder management, and security that doesn't cut corners.",
      bullets: ['Card-based discovery flow', 'Responsive product layout', 'Designed for quick visual scanning'],
      link: 'https://demo.wholesalehub.dev/',
    },
    {
      title: 'NexGen Truck & Trailer Parts',
      badge: 'E-commerce',
      image: 'assets/img/portfolio/nexgen.png',
      alt: 'NexGen Truck & Trailer Parts project preview',
      description: "The first instance of wholesalehub.dev, this e-commerce platform was built for a local truck and trailer parts supplier. It features a comprehensive product catalog, user-friendly shopping experience, and secure payment processing.",
      bullets: ['User-friendly shopping experience', 'Comprehensive product catalog', 'Secure payment processing'],
      link: 'https://nex-genparts.com/',
    },
    {
      title: 'Computer Anything Blog',
      badge: 'Technology Blog',
      image: 'assets/img/portfolio/cpta_blog.png',
      alt: 'Computer Anything Blog project preview',
      description: "Full-stack blog platform featuring secure user authentication and complete CRUD functionality, built with a RESTful API using Flask. The React frontend communicates with the backend via Axios and Redux for efficient state management. Users can tag posts, vote, and comment in real time. The app is fully dockerized, reverse-proxied with NGINX, and deployed on a self-managed VPS.",
      bullets: ['Simple structure', 'Typography-first layout', 'Designed to showcase polish'],
      link: 'https://blog.computeranything.dev/',
    },
    {
      title: 'API Looter',
      badge: 'Educational Open Source Project',
      image: 'assets/img/portfolio/api_looter.png',
      alt: 'API Looter project preview',
      description: "Open-source developer tool for browsing and testing curated public APIs. It exposes a Flask backend for managing API metadata and user interactions, with dynamic frontend rendering via Jinja2 templates. Deployed in Docker containers on a personal VPS, using NGINX for reverse proxying and HTTPS.",
      bullets: ['Focus on fidelity', 'Recreated spacing and hierarchy', 'Good for proving UI discipline'],
      link: 'https://apilooter.computeranything.dev/',
    },
    {
      title: 'Tulla Contracting',
      badge: 'Business Website',
      image: 'assets/img/portfolio/tulla_contracting.png',
      alt: 'Tulla Contracting project preview',
      description: "Professional website for a local contracting business, designed to highlight services and facilitate customer inquiries. The site features a clean, responsive design with easy navigation and clear calls to action.",
      bullets: ['Responsive design', 'Easy navigation', 'Showcases services effectively'],
      link: 'https://tullacontracting.com/',
    },
  ];

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
  }
})();
