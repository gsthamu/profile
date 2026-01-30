// ===================================
// Navigation & Scroll Effects
// ===================================
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
mobileToggle.addEventListener('click', () => {
    mobileToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Smooth scroll and active link
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });

            // Close mobile menu if open
            mobileToggle.classList.remove('active');
            navMenu.classList.remove('active');

            // Update active link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
        }
    });
});

// Update active link on scroll
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// ===================================
// Typing Effect
// ===================================
const typingText = document.getElementById('typingText');
const phrases = [
    'Cloud Architect',
    'DevOps Engineer',
    'Multi-Cloud Expert',
    'Kubernetes Specialist',
    'Infrastructure Automation'
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        typingText.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typingText.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typingSpeed = 2000; // Pause at end
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typingSpeed = 500; // Pause before next phrase
    }

    setTimeout(typeEffect, typingSpeed);
}

// Start typing effect
typeEffect();

// ===================================
// Counter Animation
// ===================================
const statNumbers = document.querySelectorAll('.stat-number');
let hasAnimated = false;

function animateCounters() {
    statNumbers.forEach(stat => {
        const target = parseInt(stat.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60fps
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                stat.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                stat.textContent = target + (target === 500 ? '+' : '');
            }
        };

        updateCounter();
    });
}

// ===================================
// Intersection Observer for Animations
// ===================================
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');

            // Trigger counter animation when about section is visible
            if (entry.target.classList.contains('about') && !hasAnimated) {
                hasAnimated = true;
                animateCounters();
            }
        }
    });
}, observerOptions);

// Observe sections for fade-in animation
sections.forEach(section => {
    observer.observe(section);
});

// Observe individual cards
const cards = document.querySelectorAll('.skill-category, .project-card, .timeline-item, .stat-card');
cards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`;
    observer.observe(card);
});

// ===================================
// Profile Image Loading
// ===================================
const profileImage = document.getElementById('profileImage');

// Handle image load error - use placeholder if profile.jpg doesn't exist
profileImage.addEventListener('error', () => {
    // Create a placeholder gradient
    const canvas = document.createElement('canvas');
    canvas.width = 400;
    canvas.height = 400;
    const ctx = canvas.getContext('2d');

    // Create gradient
    const gradient = ctx.createLinearGradient(0, 0, 400, 400);
    gradient.addColorStop(0, '#667eea');
    gradient.addColorStop(1, '#764ba2');
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 400, 400);

    // Add text
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 120px Inter';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('T', 200, 200);

    profileImage.src = canvas.toDataURL();
});

// ===================================
// Parallax Effect for Hero
// ===================================
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const hero = document.querySelector('.hero');

    if (hero && scrolled < window.innerHeight) {
        const orbs = document.querySelectorAll('.gradient-orb');
        orbs.forEach((orb, index) => {
            const speed = 0.5 + (index * 0.2);
            orb.style.transform = `translateY(${scrolled * speed}px)`;
        });
    }
});

// ===================================
// Performance Optimization
// ===================================
// Lazy load images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ===================================
// Console Easter Egg
// ===================================
console.log('%c👋 Hello there!', 'font-size: 24px; font-weight: bold; color: #667eea;');
console.log('%cLooking for something? Feel free to reach out!', 'font-size: 14px; color: #4facfe;');
console.log('%c📧 gsthamu@gmail.com', 'font-size: 14px; color: #43e97b;');
console.log('%c🔗 https://www.linkedin.com/in/gsthamu/', 'font-size: 14px; color: #43e97b;');
console.log('%c💻 https://github.com/gsthamu', 'font-size: 14px; color: #43e97b;');

// ===================================
// Mouse Spotlight Effect
// ===================================
const spotlight = document.createElement('div');
spotlight.className = 'mouse-spotlight';
document.body.appendChild(spotlight);

let mouseX = 0;
let mouseY = 0;
let spotlightX = 0;
let spotlightY = 0;

// Track mouse position
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

// Smooth spotlight animation
function animateSpotlight() {
    // Smooth easing
    spotlightX += (mouseX - spotlightX) * 0.1;
    spotlightY += (mouseY - spotlightY) * 0.1;

    spotlight.style.left = `${spotlightX}px`;
    spotlight.style.top = `${spotlightY}px`;

    requestAnimationFrame(animateSpotlight);
}

// Start spotlight animation only on non-touch devices
if (!('ontouchstart' in window)) {
    animateSpotlight();
} else {
    spotlight.style.display = 'none';
}

// ===================================
// Enhanced Scroll Animations
// ===================================
const animateOnScroll = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Add stagger delay for multiple items
            setTimeout(() => {
                entry.target.classList.add('animate-in');
            }, index * 100);
            animateOnScroll.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
});

// Animate project cards with stagger
document.querySelectorAll('.project-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(30px)';
    animateOnScroll.observe(card);
});

// Animate skill tags with stagger
document.querySelectorAll('.skill-tag').forEach((tag, index) => {
    tag.style.opacity = '0';
    tag.style.transform = 'scale(0.8)';
    tag.style.transitionDelay = `${index * 0.02}s`;
    animateOnScroll.observe(tag);
});

// Animate contact cards
document.querySelectorAll('.contact-card').forEach((card, index) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    animateOnScroll.observe(card);
});

// ===================================
// Reduced Motion Support
// ===================================
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    // Disable animations for users who prefer reduced motion
    spotlight.style.display = 'none';
    document.querySelectorAll('.project-card, .skill-tag, .contact-card').forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
    });
}
