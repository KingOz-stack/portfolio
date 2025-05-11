// Theme Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    body.dataset.theme = body.dataset.theme === 'dark' ? 'light' : 'dark';
    themeToggle.innerHTML = body.dataset.theme === 'dark' ? 
        '<i class="fas fa-sun"></i>' : 
        '<i class="fas fa-moon"></i>';
});

// Music Player
const musicToggle = document.getElementById('music-toggle');
const backgroundMusic = document.getElementById('background-music');
let isMusicPlaying = false;

musicToggle.addEventListener('click', () => {
    if (isMusicPlaying) {
        backgroundMusic.pause();
        musicToggle.innerHTML = '<i class="fas fa-music"></i>';
    } else {
        backgroundMusic.play();
        musicToggle.innerHTML = '<i class="fas fa-pause"></i>';
    }
    isMusicPlaying = !isMusicPlaying;
});

// Projects Data
const projects = [
    {
        title: 'Sentiment Analysis API',
        description: 'A full-stack application that uses natural language processing to analyze sentiment in text data. Built with Python, TensorFlow, and React.',
        techStack: ['Python', 'TensorFlow', 'React', 'Node.js', 'MongoDB'],
        githubLink: '#',
        liveLink: '#'
    },
    {
        title: 'Predictive Analytics Dashboard',
        description: 'An interactive dashboard for visualizing and predicting trends using machine learning models. Features include data visualization and real-time predictions.',
        techStack: ['Python', 'Pandas', 'Scikit-learn', 'React', 'D3.js'],
        githubLink: '#',
        liveLink: '#'
    },
    {
        title: 'E-Commerce Platform',
        description: 'A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.',
        techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
        githubLink: '#',
        liveLink: '#'
    },
    {
        title: 'Task Management System',
        description: 'A collaborative task management application with real-time updates, team collaboration features, and progress tracking.',
        techStack: ['Angular', 'Node.js', 'Socket.io', 'MongoDB'],
        githubLink: '#',
        liveLink: '#'
    },
    {
        title: 'Portfolio Website',
        description: 'A responsive portfolio website showcasing projects and skills with modern design and animations.',
        techStack: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
        githubLink: '#',
        liveLink: '#'
    }
];

// Experience Data
const experiences = [
    {
        role: 'Senior Full Stack Developer',
        company: 'Tech Solutions Inc',
        period: '2022 - Present',
        description: 'Leading development of enterprise applications using React, Node.js, and MongoDB. Implementing CI/CD pipelines and mentoring junior developers.',
        logo: 'https://via.placeholder.com/80x80?text=TS'
    },
    {
        role: 'Full Stack Developer',
        company: 'Digital Innovations',
        period: '2020 - 2022',
        description: 'Developed and maintained multiple web applications using Angular and Node.js. Implemented RESTful APIs and integrated third-party services.',
        logo: 'https://via.placeholder.com/80x80?text=DI'
    },
    {
        role: 'Frontend Developer',
        company: 'WebTech Solutions',
        period: '2018 - 2020',
        description: 'Created responsive web interfaces using HTML5, CSS3, and JavaScript. Collaborated with UX designers to implement modern design patterns.',
        logo: 'https://via.placeholder.com/80x80?text=WS'
    }
];

// Render Projects
function renderProjects() {
    const projectsGrid = document.querySelector('.projects-grid');
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        projectCard.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="tech-stack">
                ${project.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.githubLink}" target="_blank"><i class="fab fa-github"></i></a>
                <a href="${project.liveLink}" target="_blank"><i class="fas fa-external-link-alt"></i></a>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });
}

// Render Experience Timeline
function renderExperience() {
    console.log('Rendering experience section...');
    const timeline = document.querySelector('.timeline');
    console.log('Timeline element:', timeline);
    
    if (!timeline) {
        console.error('Timeline element not found!');
        return;
    }

    experiences.forEach(exp => {
        console.log('Creating experience item for:', exp.company);
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.innerHTML = `
            <img src="${exp.logo}" alt="${exp.company} logo" class="company-logo">
            <div class="timeline-content">
                <h3>${exp.role}</h3>
                <h4>${exp.company}</h4>
                <p class="period">${exp.period}</p>
                <p>${exp.description}</p>
            </div>
        `;
        timeline.appendChild(timelineItem);
    });
}

// Background Rotation
function rotateBackground() {
    const backgrounds = document.querySelectorAll('.background-image');
    let currentIndex = 0;

    setInterval(() => {
        // Fade out current background
        backgrounds[currentIndex].style.opacity = '0';
        
        // Move to next background
        currentIndex = (currentIndex + 1) % backgrounds.length;
        
        // Fade in next background
        backgrounds[currentIndex].style.opacity = '0.3';
    }, 60000); // Rotate every 60 seconds
}

// Typing Animation
function typeText() {
    const mainText = "Hi, I'm Favour Umejesi";
    const subtitleText = "Aspiring Software Engineer";
    const epigraphText = "Passionate about creating innovative solutions and building robust applications.";
    
    const typingElement = document.querySelector('.typing-text');
    const subtitleElement = document.querySelector('.typing-text-subtitle');
    const epigraphElement = document.querySelector('.typing-text-epigraph');
    
    let mainIndex = 0;
    let subtitleIndex = 0;
    let epigraphIndex = 0;
    
    function typeMain() {
        if (mainIndex < mainText.length) {
            typingElement.textContent += mainText.charAt(mainIndex);
            mainIndex++;
            setTimeout(typeMain, 100);
        } else {
            setTimeout(typeSubtitle, 500);
        }
    }
    
    function typeSubtitle() {
        if (subtitleIndex < subtitleText.length) {
            subtitleElement.textContent += subtitleText.charAt(subtitleIndex);
            subtitleIndex++;
            setTimeout(typeSubtitle, 100);
        } else {
            setTimeout(typeEpigraph, 500);
        }
    }
    
    function typeEpigraph() {
        if (epigraphIndex < epigraphText.length) {
            epigraphElement.textContent += epigraphText.charAt(epigraphIndex);
            epigraphIndex++;
            setTimeout(typeEpigraph, 50);
        }
    }
    
    // Start typing sequence
    typeMain();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM Content Loaded');
    renderProjects();
    renderExperience();
    rotateBackground();
    typeText();
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    observer.observe(section);
}); 