// Smooth scrolling for navigation links
document.querySelectorAll('header nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 70, // Adjust offset for header height
                behavior: 'smooth'
            });
        }
    });
});

// Hide header on scroll for mobile devices
let lastScroll = 0;
const header = document.querySelector('header');
const mobileBreakpoint = 768; // Breakpoint for mobile devices

window.addEventListener('scroll', () => {
    const currentScroll = window.scrollY;

    if (window.innerWidth <= mobileBreakpoint) { // Only apply to mobile devices
        if (currentScroll > lastScroll && currentScroll > 50) {
            // Scroll down: hide header
            header.classList.remove('visible');
        }
    }

    lastScroll = currentScroll;
});

// Shrink header on scroll
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// GSAP Animations
gsap.registerPlugin(ScrollTrigger);

// Animate hero section
gsap.from('.limited-offer h1', {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.5,
    ease: 'power3.out'
});

gsap.from('.limited-offer p', {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 0.8,
    ease: 'power3.out'
});

gsap.from('.limited-offer .btn', {
    opacity: 0,
    y: 50,
    duration: 1,
    delay: 1.1,
    ease: 'power3.out'
});

gsap.from('.video-container', {
    opacity: 0,
    y: 50,
    duration: 1.5,
    delay: 1.4,
    ease: 'power3.out'
});

// Animate About Us section
gsap.from('#about h2', {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
        trigger: '#about',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    }
});

gsap.from('.about-content', {
    opacity: 0,
    y: 50,
    duration: 1,
    scrollTrigger: {
        trigger: '#about',
        start: 'top 80%',
        toggleActions: 'play none none reverse'
    }
});

// Button hover effect
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('mouseover', () => {
        gsap.to(button, {
            scale: 1.1,
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
            duration: 0.3
        });
    });
    button.addEventListener('mouseout', () => {
        gsap.to(button, {
            scale: 1,
            boxShadow: 'none',
            duration: 0.3
        });
    });
});

// Smooth scrolling for pricing section
document.querySelectorAll('a[href="#pricing"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetSection = document.getElementById('pricing');
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});
