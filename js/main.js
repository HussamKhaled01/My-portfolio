


const experiences = [
    {
        id: 'neorx',
        role: 'Full Stack Developer Intern',
        company: 'NeoRx',
        companyUrl: 'https://www.linkedin.com/company/neorx2024',
        period: 'Feb 2026 – Present',
        type: 'Hybrid',
        highlights: [
            'Developing APIs and full web applications, including dashboards, using .NET Core and Angular.',
            'Building endpoints, implement business logic, handle databases with repository pattern, and integrate authentication with Angular.',
            'Creating Angular components, services, and forms, integrating APIs and learning advanced authentication workflows.',
            'Applying layered architecture, DTOs, validation, and unit testing to ensure reliable, maintainable code.'
        ]
    },
    {
        id: 'orange',
        role: 'Full Stack Developer Intern',
        company: 'Orange Coding School',
        companyUrl: 'https://www.linkedin.com/company/orange-jordan',
        period: 'Feb 2026 – Present',
        type: 'Hybrid',
        highlights: [
            'Developed multiple web projects using .NET Web API, MVC, and SQL Server, focusing on building functional and scalable backend solutions.',
            'Built responsive front-end interfaces using HTML, CSS, and Bootstrap, ensuring seamless integration with backend APIs.',
            'Enhanced problem-solving skills by applying OOP principles to solve diverse logic cases and complex programming scenarios in C#.',
            'Actively collaborated in team environments, focusing on effective communication, proactive contribution, and professional soft skill development.',
            'Refined presentation and technical communication skills through regular workshops and team-based knowledge sharing.'
        ]
    },
    {
        id: 'omicron',
        role: 'Full Stack Developer Intern',
        company: 'Omicron Solutions',
        companyUrl: 'https://www.linkedin.com/company/omicron-solutions-jo',
        period: 'Oct 2025 – Jan 2026',
        type: 'On-Site',
        highlights: [
            'Developed backend skills at Omicron Solutions by building a full e-commerce application using C#, ASP.NET MVC, Bootstrap, SQL Server, and T-SQL.',
            'Implemented CRUD operations, repository pattern, Identity authentication, email integration, Google login, and payment gateway integration.',
            'Designed databases, developed the UI, and collaborated with mentors while applying best practices in system architecture, testing, and version control.'
        ]
    },
    {
        id: 'orange2',
        role: 'Graduation Project Mentorship',
        company: 'Orange Coding School',
        companyUrl: 'https://www.linkedin.com/company/orange-jordan',
        period: 'Mar 2025 - Jun 2025',
        type: 'Hybrid',
        highlights: [
            'Participated in the development of my university graduation project under Orange’s mentorship, focusing on system analysis, software design, and testing to ensure functionality and usability.',
            'Collaborated in workshops and hands-on sessions, enhancing both technical and soft skills in a real development environment.',
            'Applied business and software analysis techniques to define requirements, design solutions, and validate system performance.'
        ]
    }
];


function renderExperience() {
    const container = document.getElementById('experienceTimeline');
    if (!container) return;

    container.innerHTML = experiences.map((exp, index) => {
        const highlightsHtml = exp.highlights
            .map(h => `<li>${h}</li>`)
            .join('');

        return `
        <div class="exp-timeline-item" id="exp-${exp.id}">
            <div class="exp-timeline-dot">
                <i class="bi bi-briefcase-fill"></i>
            </div>
            
            <div class="exp-acc-card">
                <div class="exp-acc-header" onclick="toggleExperience('${exp.id}')">
                    <div class="exp-acc-summary">
                        <h2 class="exp-acc-role">${exp.role}</h2>
                        <div class="exp-acc-details">
                            <a class="exp-acc-company" href="${exp.companyUrl}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">
                                <i class="bi bi-building"></i> <span>${exp.company}</span>
                            </a>
                            <div class="exp-acc-date">
                                <i class="bi bi-calendar3"></i> <span>${exp.period}</span>
                            </div>
                            <div class="exp-acc-type">
                                <i class="bi bi-geo-alt"></i> <span>${exp.type}</span>
                            </div>
                        </div>
                    </div>
                    <div class="exp-acc-chevron">
                        <i class="bi bi-chevron-down"></i>
                    </div>
                </div>
                
                <div class="exp-acc-body">
                    <div class="exp-acc-body-inner">
                        <div class="exp-acc-divider"></div>
                        <div class="exp-acc-content">
                            <ul class="exp-acc-highlights">
                                ${highlightsHtml}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
    }).join('');


    window.toggleExperience = function (id) {
        const item = document.getElementById(`exp-${id}`);
        const card = item?.querySelector('.exp-acc-card');
        if (card) {
            card.classList.toggle('exp-open');
        }
    };


    const items = container.querySelectorAll('.exp-timeline-item');
    const expObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('exp-visible');
                expObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });

    items.forEach((item, i) => {
        item.style.transitionDelay = `${i * 0.15}s`;
        expObserver.observe(item);
    });
}


const projects = [
    {
        id: 'business-card',
        title: 'Business Card Management App',
        description: 'A full-stack system for managing digital business cards accessible via QR code scanning.',
        problem: 'Traditional paper business cards are easy to lose and difficult to update or manage across organizations.',
        solution: 'Implemented a RESTful API backend with QR code generation, allowing cards to be created, stored, and retrieved digitally without physical media.',
        tech: ['ASP.NET Web API', 'Angular', 'SQL Server', 'OpenAPI'],
        github: 'https://github.com/HussamKhaled01/LearningTask1',
        image: 'images/software.png'
    },
    {
        id: 'ecommerce',
        title: 'E-commerce Management System',
        description: 'A scalable MVC e-commerce platform supporting multiple product types and business scenarios.',
        problem: 'Small businesses require a flexible system to manage products, orders, and customers without heavy infrastructure overhead.',
        solution: 'Designed a structured relational database schema with an MVC architecture, EF Core ORM layer, and modular backend to accommodate varied product and order flows.',
        tech: ['ASP.NET MVC', 'SQL Server', 'Entity Framework'],
        github: 'https://github.com/HussamKhaled01/Ecommerce_Project',
        image: 'images/software.png'
    },
    {
        id: 'shatleh',
        title: 'Shatleh Agricultural Store',
        description: 'A full-stack platform unifying agricultural product sales, booking services, and educational content for home gardening.',
        problem: 'Home gardening users lack a single trusted source for verified products, professional agricultural services, and reliable plant-care guidance.',
        solution: 'Built a multi-module platform with a Laravel REST API backend, a React/Next.js frontend, and a MySQL database to consolidate product listings, service bookings, and educational resources under one domain.',
        tech: ['Laravel', 'React', 'Next.js', 'MySQL'],
        github: 'https://github.com/MohAtiyyat/shatleh',
        image: 'images/software.png'
    },
    {
        id: 'goldvault',
        title: 'GoldVault Gold Tracker',
        description: 'A responsive market dashboard for live gold prices and financial news.',
        problem: 'Traders and investors need a real-time, unified dashboard to track market fluctuations and relevant news without constant page reloads.',
        solution: 'Integrated external REST APIs with asynchronous JavaScript to create a mobile-first interface that handles real-time data streams and provides a seamless user experience.',
        tech: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'REST API'],
        github: 'https://github.com/HussamKhaled01/Gold-Price-Tracker-Web-App',
        image: 'images/software.png'
    }
];

document.addEventListener('DOMContentLoaded', () => {

    const scrollTopBtn = document.querySelector('.scroll-top');
    const handleScroll = () => {
        const scrollPos = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollPos > 300) {
            scrollTopBtn.classList.add('show');
        } else {
            scrollTopBtn.classList.remove('show');
        }
    };


    const revealElements = document.querySelectorAll('.reveal, .timeline-item');
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -20px 0px'
    };

    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                revealObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    revealElements.forEach(el => revealObserver.observe(el));
    window.addEventListener('scroll', handleScroll);
    handleScroll();


    const track = document.getElementById('carouselTrack');
    const pagination = document.getElementById('carouselPagination');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    let currentIndex = 0;
    let cardsPerView = 1;

    function getCardsPerView() {
        if (window.innerWidth >= 1200) return 3;
        if (window.innerWidth >= 768) return 2;
        return 1;
    }

    function renderCarousel() {
        cardsPerView = getCardsPerView();
        track.innerHTML = '';
        pagination.innerHTML = '';

        projects.forEach((project, index) => {

            const card = document.createElement('div');
            card.className = 'project-card reveal-hidden';
            card.style.width = `calc(100% / ${cardsPerView})`;

            card.innerHTML = `
                <div class="project-card-image reveal-item" data-src="${project.image}"></div>
                <div class="project-card-text">
                    <h2 class="reveal-item">${project.title}</h2>
                    <p class="reveal-item">${project.description}</p>
                    <div class="project-card-tech reveal-item">
                        ${project.tech.map(t => `<h6>${t}</h6>`).join('')}
                    </div>
                    <button class="btn-technical reveal-item" onclick="openModal('${project.id}')">
                        View Details
                    </button>
                </div>
            `;
            track.appendChild(card);
        });


        const pageCount = Math.ceil(projects.length / cardsPerView);
        for (let i = 0; i < pageCount; i++) {
            const dot = document.createElement('div');
            dot.className = `dot ${i === 0 ? 'active' : ''}`;
            dot.addEventListener('click', () => goToPage(i));
            pagination.appendChild(dot);
        }

        setupRevealObserver();
        updateCarousel();
    }

    function setupRevealObserver() {
        const options = {
            threshold: 0.15,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const card = entry.target;
                    const img = card.querySelector('.project-card-image');
                    const src = img.getAttribute('data-src');


                    if (src) {
                        img.style.backgroundImage = `url(${src})`;
                    }


                    card.classList.remove('reveal-hidden');
                    card.classList.add('reveal-visible');


                    observer.unobserve(card);
                }
            });
        }, options);

        const cards = document.querySelectorAll('.project-card');
        cards.forEach(card => observer.observe(card));
    }

    function updateCarousel() {
        cardsPerView = getCardsPerView();
        const offset = -(currentIndex * (100 / cardsPerView));
        track.style.transform = `translateX(${offset}%)`;


        const dots = document.querySelectorAll('.dot');
        const activePage = Math.floor(currentIndex / 1);
        dots.forEach((dot, i) => {
            dot.classList.toggle('active', i === activePage);
        });


        prevBtn.style.visibility = currentIndex <= 0 ? 'hidden' : 'visible';
        nextBtn.style.visibility = currentIndex >= projects.length - cardsPerView ? 'hidden' : 'visible';
    }

    function goToPage(pageIndex) {
        currentIndex = pageIndex;
        updateCarousel();
    }

    nextBtn.addEventListener('click', () => {
        if (currentIndex < projects.length - cardsPerView) {
            currentIndex++;
            updateCarousel();
        }
    });

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    window.addEventListener('resize', () => {
        const newCardsPerView = getCardsPerView();
        if (newCardsPerView !== cardsPerView) {
            currentIndex = 0;
            renderCarousel();
        }
    });


    const modal = document.getElementById('project-modal');
    const modalBody = document.getElementById('modal-body');
    const closeModal = document.getElementById('closeModal');

    window.openModal = function (projectId) {
        const project = projects.find(p => p.id === projectId);
        if (!project) return;

        modalBody.innerHTML = `
            <h2 class="modal-title">${project.title}</h2>
            <hr class="modal-hr">
            <div class="modal-section">
                <h3><i class="bi bi-info-circle"></i> Problem</h3>
                <p>${project.problem}</p>
            </div>
            <div class="modal-section">
                <h3><i class="bi bi-gear"></i> Solution</h3>
                <p>${project.solution}</p>
            </div>
            <div class="modal-links">
                <a href="${project.github}" target="_blank" class="btn-github">
                    <i class="bi bi-github"></i> View Source Code
                </a>
            </div>
        `;
        modal.showModal();
    };

    closeModal.addEventListener('click', () => modal.close());


    modal.addEventListener('click', (e) => {
        const dialogDimensions = modal.getBoundingClientRect();
        if (e.clientX < dialogDimensions.left || e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top || e.clientY > dialogDimensions.bottom) {
            modal.close();
        }
    });


    renderCarousel();
    renderExperience();
});