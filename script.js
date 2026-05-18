/* ============================================
   ELITE FIT - JAVASCRIPT FUNCTIONALITY
   High-performance interactivity and animations
   ============================================ */

// ============================================
// PAGE LOAD INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    initializeNavigation();
    initializeScrollAnimations();
    initializeCounterAnimation();
    initializeFormValidation();
    initializeScrollToTop();
    initializeMobileMenu();
    initializeParallax();
    initializeButtonEffects();
});

// ============================================
// NAVIGATION FUNCTIONALITY
// ============================================

function initializeNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            // Remove active class from all links
            navLinks.forEach(l => l.classList.remove('active'));

            // Add active class to clicked link
            this.classList.add('active');

            // Close mobile menu
            const mobileMenu = document.querySelector('.nav-menu');
            const hamburger = document.querySelector('.hamburger');
            mobileMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });
}

// ============================================
// SMOOTH SCROLL TO SECTION
// ============================================

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ============================================
// SCROLL TO TOP FUNCTIONALITY
// ============================================

function initializeScrollToTop() {
    const scrollToTopBtn = document.getElementById('scrollToTop');

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 300) {
            scrollToTopBtn.classList.add('show');
        } else {
            scrollToTopBtn.classList.remove('show');
        }
    });
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// ============================================
// MOBILE MENU TOGGLE
// ============================================

function initializeMobileMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');

    if (hamburger) {
        hamburger.addEventListener('click', function () {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });
    }

    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// ============================================
// ANIMATED COUNTER FOR STATS
// ============================================

function initializeCounterAnimation() {
    const counterElements = document.querySelectorAll('[data-target]');
    let animationStarted = false;

    const animateCounter = (element) => {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const start = 0;
        const increment = target / (duration / 16); // 60fps
        let current = start;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                element.textContent = Math.floor(current);
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target;
            }
        };

        updateCounter();
    };

    // Observer to trigger animation when section is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animationStarted) {
                animationStarted = true;
                counterElements.forEach(element => {
                    animateCounter(element);
                });
            }
        });
    }, { threshold: 0.5 });

    // Observe the first counter element
    if (counterElements.length > 0) {
        observer.observe(counterElements[0].parentElement);
    }
}

// ============================================
// FORM VALIDATION AND SUBMISSION
// ============================================

function initializeFormValidation() {
    const form = document.getElementById('bookingForm');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Reset error states
            document.querySelectorAll('.form-group').forEach(group => {
                group.classList.remove('error');
            });

            // Validate all fields
            let isValid = true;

            // Validate name
            const name = document.getElementById('name');
            if (!name.value.trim()) {
                showError('name', 'Please enter your full name');
                isValid = false;
            } else if (name.value.trim().length < 2) {
                showError('name', 'Name must be at least 2 characters');
                isValid = false;
            }

            // Validate email
            const email = document.getElementById('email');
            if (!email.value.trim()) {
                showError('email', 'Please enter your email address');
                isValid = false;
            } else if (!isValidEmail(email.value)) {
                showError('email', 'Please enter a valid email address');
                isValid = false;
            }

            // Validate phone
            const phone = document.getElementById('phone');
            if (!phone.value.trim()) {
                showError('phone', 'Please enter your phone number');
                isValid = false;
            } else if (!isValidPhone(phone.value)) {
                showError('phone', 'Please enter a valid phone number');
                isValid = false;
            }

            // Validate date
            const date = document.getElementById('date');
            if (!date.value) {
                showError('date', 'Please select a date');
                isValid = false;
            } else if (new Date(date.value) < new Date()) {
                showError('date', 'Please select a future date');
                isValid = false;
            }

            // Validate time
            const time = document.getElementById('time');
            if (!time.value) {
                showError('time', 'Please select a time slot');
                isValid = false;
            }

            // Validate program
            const program = document.getElementById('program');
            if (!program.value) {
                showError('program', 'Please select a program');
                isValid = false;
            }

            if (isValid) {
                // Form is valid - submit
                submitBooking(form);
            }
        });
    }
}

function showError(fieldId, message) {
    const field = document.getElementById(fieldId);
    const formGroup = field.closest('.form-group');
    const errorElement = document.getElementById(fieldId + 'Error');

    formGroup.classList.add('error');
    if (errorElement) {
        errorElement.textContent = message;
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[\d\s\-\+\(\)]{10,}$/;
    return phoneRegex.test(phone);
}

function submitBooking(form) {
    // Get form data
    const formData = new FormData(form);
    const bookingData = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        date: formData.get('date'),
        time: formData.get('time'),
        program: formData.get('program'),
        submittedAt: new Date().toLocaleString()
    };

    // Save to localStorage for demonstration
    let bookings = JSON.parse(localStorage.getItem('gymBookings')) || [];
    bookings.push(bookingData);
    localStorage.setItem('gymBookings', JSON.stringify(bookings));

    // Show success message
    showSuccessMessage();

    // Reset form
    form.reset();

    // Log the booking
    console.log('Booking submitted:', bookingData);
}

function showSuccessMessage() {
    // Create and show success notification
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        background: linear-gradient(135deg, #4CAF50, #45a049);
        color: white;
        padding: 20px 30px;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        z-index: 2000;
        animation: slideInRight 0.5s ease-out;
        font-weight: 600;
        max-width: 300px;
    `;
    notification.textContent = '✓ Trial booking confirmed! We\'ll contact you soon.';

    document.body.appendChild(notification);

    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideInLeft 0.5s ease-out forwards';
        setTimeout(() => notification.remove(), 500);
    }, 5000);
}

// ============================================
// SCROLL ANIMATIONS (INTERSECTION OBSERVER)
// ============================================

function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Trigger animation based on data-aos attribute
                const aosType = entry.target.getAttribute('data-aos');
                const delay = entry.target.getAttribute('data-aos-delay') || '0';

                entry.target.style.opacity = '1';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all elements with data-aos attribute
    document.querySelectorAll('[data-aos]').forEach(element => {
        observer.observe(element);
    });
}

// ============================================
// PARALLAX EFFECT
// ============================================

function initializeParallax() {
    const parallaxElements = document.querySelectorAll('.hero-background::before');

    window.addEventListener('scroll', () => {
        const scrollPosition = window.pageYOffset;

        // Parallax for hero background
        const heroBackground = document.querySelector('.hero-background');
        if (heroBackground) {
            heroBackground.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        }
    });
}

// ============================================
// BUTTON RIPPLE EFFECT
// ============================================

function initializeButtonEffects() {
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            // Create ripple element
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: rgba(255, 255, 255, 0.5);
                border-radius: 50%;
                left: ${x}px;
                top: ${y}px;
                pointer-events: none;
                animation: rippleEffect 0.6s ease-out;
            `;

            // Add ripple animation if it doesn't exist
            if (!document.getElementById('rippleStyles')) {
                const style = document.createElement('style');
                style.id = 'rippleStyles';
                style.textContent = `
                    @keyframes rippleEffect {
                        to {
                            transform: scale(4);
                            opacity: 0;
                        }
                    }
                `;
                document.head.appendChild(style);
            }

            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// ============================================
// MOUSE FOLLOW EFFECT FOR CARDS
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    const cards = document.querySelectorAll('.service-card, .trainer-card, .plan-card, .stat-card');

    cards.forEach(card => {
        card.addEventListener('mousemove', function (e) {
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Optional: Add subtle glow effect at mouse position
            this.style.setProperty('--mouse-x', `${x}px`);
            this.style.setProperty('--mouse-y', `${y}px`);
        });

        card.addEventListener('mouseleave', function () {
            this.style.setProperty('--mouse-x', '50%');
            this.style.setProperty('--mouse-y', '50%');
        });
    });
});

// ============================================
// KEYBOARD NAVIGATION
// ============================================

document.addEventListener('keydown', function (e) {
    // Press 'H' to go to home
    if (e.key === 'h' || e.key === 'H') {
        scrollToSection('home');
    }

    // Press 'B' to go to booking
    if (e.key === 'b' || e.key === 'B') {
        scrollToSection('booking');
    }
});

// ============================================
// SMOOTH SCROLL BEHAVIOR FOR ALL ANCHOR LINKS
// ============================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && document.querySelector(href)) {
            e.preventDefault();
            const element = document.querySelector(href);
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ============================================
// PERFORMANCE: LAZY LOADING
// ============================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// ============================================
// UTILITY: GET CURRENT SCROLL POSITION
// ============================================

function getScrollPosition() {
    return {
        x: window.pageXOffset || document.documentElement.scrollLeft,
        y: window.pageYOffset || document.documentElement.scrollTop
    };
}

// ============================================
// UTILITY: DEBOUNCE FUNCTION
// ============================================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ============================================
// WINDOW RESIZE HANDLER
// ============================================

window.addEventListener('resize', debounce(function () {
    console.log('Window resized');
}, 250));

// ============================================
// CONSOLE MESSAGE FOR DEVELOPERS
// ============================================

console.log('%c⚡ ELITE FIT - Premium Gym Website', 'color: #ff3333; font-size: 18px; font-weight: bold;');
console.log('%cBuilt with: HTML5, CSS3, JavaScript ES6+', 'color: #00d4ff; font-size: 12px;');
console.log('%cDesigned for high-performance, conversion-focused fitness marketing', 'color: #ffd700; font-size: 12px;');

// ============================================
// DYNAMIC YEAR IN FOOTER
// ============================================

document.addEventListener('DOMContentLoaded', function () {
    const year = new Date().getFullYear();
    const footerText = document.querySelector('.footer-bottom p');
    if (footerText) {
        footerText.textContent = footerText.textContent.replace('2026', year);
    }
});

// ============================================
// THEME TOGGLE (Optional Enhancement)
// ============================================

function initializeThemeToggle() {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    if (prefersDark.matches) {
        document.body.classList.add('dark-theme');
    }

    prefersDark.addEventListener('change', (e) => {
        if (e.matches) {
            document.body.classList.add('dark-theme');
        } else {
            document.body.classList.remove('dark-theme');
        }
    });
}

// ============================================
// ANALYTICS TRACKING (PLACEHOLDER)
// ============================================

function trackEvent(eventName, eventData) {
    console.log(`📊 Event: ${eventName}`, eventData);
    // In production, send to analytics service
}

// Track page views
trackEvent('page_view', {
    page: window.location.pathname,
    timestamp: new Date().toISOString()
});

// Track button clicks
document.querySelectorAll('.btn-primary').forEach(button => {
    button.addEventListener('click', function () {
        const text = this.textContent;
        trackEvent('button_click', {
            button: text,
            timestamp: new Date().toISOString()
        });
    });
});

// ============================================
// NOTIFICATION SYSTEM
// ============================================

function showNotification(message, type = 'info', duration = 3000) {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        right: 20px;
        padding: 15px 25px;
        border-radius: 10px;
        box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
        z-index: 2000;
        animation: slideInRight 0.5s ease-out;
        font-weight: 600;
        max-width: 300px;
    `;

    // Set color based on type
    const colors = {
        success: 'linear-gradient(135deg, #4CAF50, #45a049)',
        error: 'linear-gradient(135deg, #ff3333, #ff6b6b)',
        warning: 'linear-gradient(135deg, #ff9800, #fb8c00)',
        info: 'linear-gradient(135deg, #2196F3, #1976D2)'
    };

    notification.style.background = colors[type] || colors.info;
    notification.style.color = 'white';

    document.body.appendChild(notification);

    // Remove after duration
    setTimeout(() => {
        notification.style.animation = 'slideInLeft 0.5s ease-out forwards';
        setTimeout(() => notification.remove(), 500);
    }, duration);
}

// ============================================
// EXPORT FUNCTIONS FOR TESTING
// ============================================

// Make functions globally available for testing
window.EliteFit = {
    scrollToSection,
    scrollToTop,
    showNotification,
    trackEvent,
    getScrollPosition
};

console.log('%c✓ All systems initialized', 'color: #4CAF50; font-weight: bold;');

// ============================================
// CUSTOM CURSOR & 3D TILT
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const dot = document.querySelector('.cursor-dot');
    const ring = document.querySelector('.cursor-ring');
    
    if(dot && ring) {
        let mouseX = window.innerWidth / 2;
        let mouseY = window.innerHeight / 2;
        let ringX = mouseX;
        let ringY = mouseY;
        
        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
            
            dot.style.left = `${mouseX}px`;
            dot.style.top = `${mouseY}px`;
        });
        
        const animateRing = () => {
            ringX += (mouseX - ringX) * 0.15;
            ringY += (mouseY - ringY) * 0.15;
            
            ring.style.left = `${ringX}px`;
            ring.style.top = `${ringY}px`;
            
            requestAnimationFrame(animateRing);
        };
        
        animateRing();
        
        const interactables = document.querySelectorAll('a, button, input, select, .tilt-card');
        interactables.forEach(el => {
            el.addEventListener('mouseenter', () => {
                ring.style.width = '60px';
                ring.style.height = '60px';
                ring.style.borderColor = 'rgba(255, 51, 51, 0.5)';
                ring.style.backgroundColor = 'rgba(255, 51, 51, 0.1)';
            });
            el.addEventListener('mouseleave', () => {
                ring.style.width = '40px';
                ring.style.height = '40px';
                ring.style.borderColor = 'var(--primary-color)';
                ring.style.backgroundColor = 'transparent';
            });
        });
    }
    
    // 3D Tilt Effect
    const tiltCards = document.querySelectorAll('.tilt-card');
    tiltCards.forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = ((y - centerY) / centerY) * -10;
            const rotateY = ((x - centerX) / centerX) * 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
            card.style.transition = 'transform 0.5s ease, border-color 0.3s, box-shadow 0.3s';
        });
        
        card.addEventListener('mouseenter', () => {
            card.style.transition = 'none';
        });
    });

    // Newsletter Form Submission
    const newsletterForm = document.getElementById('newsletterForm');
    if(newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const email = document.getElementById('newsletterEmail').value;
            if(email) {
                showNotification('Thanks for subscribing to Elite Fit!', 'success');
                newsletterForm.reset();
            }
        });
    }
});
