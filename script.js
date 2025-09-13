// Theme Management
function initThemeToggle() {
    const themeButtons = document.querySelectorAll('.theme-btn');
    const savedTheme = localStorage.getItem('portfolio-theme');
    const systemPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    
    // Set initial theme
    document.documentElement.setAttribute('data-theme', initialTheme);
    updateActiveThemeButton(initialTheme);
    
    themeButtons.forEach(button => {
        button.addEventListener('click', () => {
            const theme = button.getAttribute('data-theme');
            document.documentElement.setAttribute('data-theme', theme);
            localStorage.setItem('portfolio-theme', theme);
            updateActiveThemeButton(theme);
            
            // Add theme change animation
            document.body.style.transition = 'all 0.3s ease';
            setTimeout(() => {
                document.body.style.transition = '';
            }, 300);
            

            
            // Update navbar on theme change
            updateNavbarOnThemeChange();
        });
    });
}

function updateNavbarOnThemeChange() {
    const navbar = document.querySelector('.navbar');
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    
    if (window.scrollY > 100) {
        if (isDark) {
            navbar.style.background = 'rgba(15, 23, 42, 0.98)';
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        }
    } else {
        if (isDark) {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
        navbar.style.boxShadow = 'none';
    }
}

function updateActiveThemeButton(theme) {
    document.querySelectorAll('.theme-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    const activeButton = document.querySelector(`[data-theme="${theme}"]`);
    if (activeButton) {
        activeButton.classList.add('active');
    }
    

}



// Initialize theme toggle
initThemeToggle();

// Initialize project navigation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // initProjectNavigation(); // Commented out for vertical grid layout
    initProjectFilters();
});

function initProjectFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');

            const filter = btn.getAttribute('data-filter');

            projectCards.forEach(card => {
                const category = card.getAttribute('data-category');
                
                if (filter === 'all' || category === filter) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.6s ease-out';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    
    if (window.scrollY > 100) {
        if (isDark) {
            navbar.style.background = 'rgba(15, 23, 42, 0.98)';
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.3)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        }
    } else {
        if (isDark) {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        }
        navbar.style.boxShadow = 'none';
    }
});

// Particle System
function createParticles() {
    const particleContainer = document.createElement('div');
    particleContainer.className = 'particle-container';
    particleContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 1;
        overflow: hidden;
    `;
    document.body.appendChild(particleContainer);

    for (let i = 0; i < 50; i++) {
        createParticle(particleContainer);
    }
}

function createParticle(container) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
        position: absolute;
        width: 4px;
        height: 4px;
        background: ${getRandomColor()};
        border-radius: 50%;
        opacity: 0.6;
        pointer-events: none;
        animation: floatParticle ${Math.random() * 10 + 10}s linear infinite;
    `;
    
    particle.style.left = Math.random() * 100 + '%';
    particle.style.top = Math.random() * 100 + '%';
    particle.style.animationDelay = Math.random() * 10 + 's';
    
    container.appendChild(particle);
}

function getRandomColor() {
    const colors = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];
    return colors[Math.floor(Math.random() * colors.length)];
}

// Add particle animation CSS
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes floatParticle {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 0.6;
        }
        90% {
            opacity: 0.6;
        }
        100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
            
            // Add special effects for different sections
            if (entry.target.id === 'skills') {
                animateSkillBars();
            }
            if (entry.target.id === 'projects') {
                animateProjectCards();
            }
            if (entry.target.id === 'experience') {
                animateTimeline();
            }
        }
    });
}, observerOptions);

// Observe all sections for animation
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Enhanced skill bar animation
function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-bar');
    skillBars.forEach((bar, index) => {
        setTimeout(() => {
            const width = bar.style.width;
            bar.style.width = '0%';
            bar.style.opacity = '0';
            
            setTimeout(() => {
                bar.style.transition = 'width 2s ease, opacity 1s ease';
                bar.style.width = width;
                bar.style.opacity = '1';
            }, index * 200);
        }, 500);
    });
}

// Enhanced project card animation
function animateProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach((card, index) => {
        setTimeout(() => {
            card.style.transform = 'translateY(50px) scale(0.9)';
            card.style.opacity = '0';
            
            setTimeout(() => {
                card.style.transition = 'all 0.8s ease';
                card.style.transform = 'translateY(0) scale(1)';
                card.style.opacity = '1';
            }, index * 200);
        }, 300);
    });
}

// Enhanced timeline animation
function animateTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        setTimeout(() => {
            item.style.transform = 'translateX(-100px)';
            item.style.opacity = '0';
            
            setTimeout(() => {
                item.style.transition = 'all 0.8s ease';
                item.style.transform = 'translateX(0)';
                item.style.opacity = '1';
            }, index * 300);
        }, 200);
    });
}

// Animate chart bars in hero section
const chartBars = document.querySelectorAll('.chart-bar');
chartBars.forEach((bar, index) => {
    setTimeout(() => {
        bar.style.height = bar.style.height;
    }, index * 200);
});

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    type();
}

// Initialize page load effects
window.addEventListener('load', () => {
    // Create particles
    createParticles();
    
    // Animate hero elements without typewriter effect
    const heroElements = document.querySelectorAll('.hero-title, .hero-description, .hero-buttons, .hero-stats');
    heroElements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            element.style.transition = 'all 0.6s ease-out';
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Enhanced counter animation for stats
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);
    
    function updateCounter() {
        start += increment;
        if (start < target) {
            element.textContent = Math.floor(start) + '+';
            element.style.transform = 'scale(1.1)';
            setTimeout(() => {
                element.style.transform = 'scale(1)';
            }, 100);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + '+';
            element.style.transform = 'scale(1)';
        }
    }
    updateCounter();
}

// Animate stats when they come into view
const statNumbers = document.querySelectorAll('.stat-number');
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            const text = element.textContent;
            const number = parseInt(text.replace(/\D/g, ''));
            animateCounter(element, number);
            statsObserver.unobserve(element);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => {
    statsObserver.observe(stat);
});

// Enhanced form submission handling with Formspree
const contactForm = document.querySelector('.contact-form form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        // Don't prevent default - let Formspree handle the submission
        // e.preventDefault();
        
        // Get form data for validation
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const subject = formData.get('subject');
        const message = formData.get('message');
        
        // Simple validation
        if (!name || !email || !subject || !message) {
            e.preventDefault(); // Prevent submission if validation fails
            showNotification('Please fill in all fields', 'error');
            return;
        }
        
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            e.preventDefault(); // Prevent submission if validation fails
            showNotification('Please enter a valid email address', 'error');
            return;
        }
        
        // Show loading state
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        submitBtn.style.transform = 'scale(0.95)';
        
        // Formspree will handle the actual submission
        // We'll show success message after a short delay
        setTimeout(() => {
            submitBtn.style.transform = 'scale(1.1)';
            setTimeout(() => {
                submitBtn.style.transform = 'scale(1)';
            }, 200);
            
            showNotification('Thank you for your message! I\'ll get back to you within 24 hours.', 'success');
            contactForm.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
        }, 2000);
    });
}

// Enhanced notification system
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add enhanced styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : type === 'error' ? '#ef4444' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 12px;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        display: flex;
        align-items: center;
        gap: 1rem;
        max-width: 400px;
        transform: translateX(100%) scale(0.8);
        transition: all 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
        backdrop-filter: blur(10px);
        border: 1px solid rgba(255, 255, 255, 0.1);
    `;
    
    document.body.appendChild(notification);
    
    // Enhanced animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0) scale(1)';
    }, 100);
    
    // Close button functionality
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(100%) scale(0.8)';
        setTimeout(() => {
            notification.remove();
        }, 400);
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(100%) scale(0.8)';
            setTimeout(() => {
                notification.remove();
            }, 400);
        }
    }, 5000);
}

// Enhanced project card hover effects
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-15px) scale(1.03)';
        card.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4)';
        
        // Add glow effect
        const glow = document.createElement('div');
        glow.className = 'card-glow';
        glow.style.cssText = `
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: radial-gradient(circle at center, rgba(59, 130, 246, 0.2) 0%, transparent 70%);
            border-radius: 16px;
            pointer-events: none;
            z-index: -1;
        `;
        card.appendChild(glow);
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0) scale(1)';
        card.style.boxShadow = 'var(--shadow-sm)';
        
        // Remove glow effect
        const glow = card.querySelector('.card-glow');
        if (glow) {
            glow.remove();
        }
    });
});

// Enhanced skill item hover effects
const skillItems = document.querySelectorAll('.skill-item');
skillItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateX(15px) scale(1.02)';
        item.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)';
        
        // Animate skill bar
        const skillBar = item.querySelector('.skill-bar');
        if (skillBar) {
            skillBar.style.transform = 'scaleY(1.2)';
        }
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateX(0) scale(1)';
        item.style.boxShadow = 'var(--shadow-sm)';
        
        // Reset skill bar
        const skillBar = item.querySelector('.skill-bar');
        if (skillBar) {
            skillBar.style.transform = 'scaleY(1)';
        }
    });
});

// Enhanced timeline animation
const timelineItems = document.querySelectorAll('.timeline-item');
const timelineObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, { threshold: 0.3 });

timelineItems.forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-50px)';
    item.style.transition = 'all 0.8s ease';
    timelineObserver.observe(item);
});

// Optimized parallax effect for hero section
let ticking = false;

function updateParallax() {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    
    if (hero && scrolled < window.innerHeight) {
        const rate = scrolled * -0.3;
        hero.style.transform = `translateY(${rate}px)`;
    }
    
    // Parallax for floating elements
    const floatingCards = document.querySelectorAll('.floating-card');
    floatingCards.forEach((card, index) => {
        const speed = 0.05 + (index * 0.02);
        const yPos = -(scrolled * speed);
        card.style.transform = `translateY(${yPos}px)`;
    });
    
    ticking = false;
}

function requestParallaxUpdate() {
    if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
    }
}

window.addEventListener('scroll', requestParallaxUpdate);

// Add loading animation with enhanced effects
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
    
    // Add entrance animation for all sections
    const sections = document.querySelectorAll('section');
    sections.forEach((section, index) => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            section.style.transition = 'all 0.8s ease';
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Add enhanced CSS for loading state
const style = document.createElement('style');
style.textContent = `
    body:not(.loaded) {
        overflow: hidden;
    }
    
    body:not(.loaded)::before {
        content: '';
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    
    body:not(.loaded)::after {
        content: 'Loading...';
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-size: 1.5rem;
        font-weight: 600;
        z-index: 10000;
        animation: loadingPulse 1.5s ease-in-out infinite;
    }
    
    @keyframes loadingPulse {
        0%, 100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        50% { opacity: 0.7; transform: translate(-50%, -50%) scale(1.1); }
    }
    
    .notification-content {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        flex: 1;
    }
    
    .notification-close {
        background: none;
        border: none;
        color: white;
        cursor: pointer;
        padding: 0.25rem;
        border-radius: 4px;
        transition: all 0.3s ease;
    }
    
    .notification-close:hover {
        background: rgba(255, 255, 255, 0.2);
        transform: scale(1.1);
    }
    
    /* Enhanced hover effects */
    .btn:hover {
        transform: translateY(-3px) scale(1.05);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    }
    
    .nav-link:hover {
        transform: translateY(-2px);
        box-shadow: 0 5px 15px rgba(59, 130, 246, 0.2);
    }
    
    .floating-card:hover {
        transform: scale(1.1) rotate(5deg);
        box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
    }
`;
document.head.appendChild(style);

// Enhanced scroll progress indicator
const progressBar = document.createElement('div');
progressBar.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 4px;
    background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%);
    z-index: 1001;
    transition: width 0.3s ease;
    box-shadow: 0 0 10px rgba(59, 130, 246, 0.5);
`;
document.body.appendChild(progressBar);

window.addEventListener('scroll', () => {
    const scrolled = (window.pageYOffset / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    progressBar.style.width = scrolled + '%';
});

// Enhanced tooltip functionality
const tooltipElements = document.querySelectorAll('[data-tooltip]');
tooltipElements.forEach(element => {
    element.addEventListener('mouseenter', (e) => {
        const tooltip = document.createElement('div');
        tooltip.textContent = e.target.getAttribute('data-tooltip');
        tooltip.style.cssText = `
            position: absolute;
            background: #1f2937;
            color: white;
            padding: 0.75rem 1rem;
            border-radius: 8px;
            font-size: 0.875rem;
            z-index: 1000;
            pointer-events: none;
            white-space: nowrap;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
            border: 1px solid rgba(255, 255, 255, 0.1);
            backdrop-filter: blur(10px);
            transform: scale(0.8);
            opacity: 0;
            transition: all 0.3s ease;
        `;
        
        document.body.appendChild(tooltip);
        
        const rect = e.target.getBoundingClientRect();
        tooltip.style.left = rect.left + (rect.width / 2) - (tooltip.offsetWidth / 2) + 'px';
        tooltip.style.top = rect.top - tooltip.offsetHeight - 10 + 'px';
        
        // Animate in
        setTimeout(() => {
            tooltip.style.transform = 'scale(1)';
            tooltip.style.opacity = '1';
        }, 10);
        
        e.target.tooltip = tooltip;
    });
    
    element.addEventListener('mouseleave', (e) => {
        if (e.target.tooltip) {
            e.target.tooltip.style.transform = 'scale(0.8)';
            e.target.tooltip.style.opacity = '0';
            setTimeout(() => {
                e.target.tooltip.remove();
            }, 300);
        }
    });
});

// Enhanced keyboard navigation support
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Enhanced focus management for accessibility
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('focus', () => {
        link.style.outline = '2px solid #3b82f6';
        link.style.outlineOffset = '2px';
        link.style.transform = 'scale(1.05)';
    });
    
    link.addEventListener('blur', () => {
        link.style.outline = 'none';
        link.style.transform = 'scale(1)';
    });
});

// Performance optimization: Debounce scroll events
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

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    // Scroll event handlers here
}, 16);

window.addEventListener('scroll', debouncedScrollHandler);

// Enhanced error handling for images
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', () => {
        img.style.display = 'none';
    });
});

// Add enhanced console message for developers
console.log(`
🚀 Data Analyst Portfolio Website
📊 Built with modern web technologies
🎨 Dynamic dark theme design
✨ Enhanced animations and interactions
👨‍💻 Created for Kunal Kushwaha
📧 Contact: kunalkushwaha.2k3@gmail.com
🌐 Ready for Vercel deployment
`);



// Enhanced Project navigation functionality
function initProjectNavigation() {
    const projectsGrid = document.getElementById('projectsGrid');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const projectCounter = document.querySelector('.project-counter .current');
    const totalProjects = document.querySelector('.project-counter .total');
    
    console.log('Initializing project navigation...');
    console.log('projectsGrid:', projectsGrid);
    console.log('prevBtn:', prevBtn);
    console.log('nextBtn:', nextBtn);
    
    if (!projectsGrid || !prevBtn || !nextBtn) {
        console.error('Required elements not found for project navigation');
        return;
    }
    
    const projectCards = projectsGrid.querySelectorAll('.project-card');
    console.log('Found project cards:', projectCards.length);
    console.log('Project cards:', projectCards);
    
    const cardWidth = 400 + 32; // card width + gap
    let currentIndex = 0;
    const maxIndex = Math.max(0, projectCards.length - 2); // Show 2 cards at a time
    const totalCount = projectCards.length;
    
    // Update total projects count
    if (totalProjects) {
        totalProjects.textContent = totalCount;
    }
    
    function updateActiveCards() {
        projectCards.forEach((card, index) => {
            card.classList.remove('active');
            if (index >= currentIndex && index < currentIndex + 2) {
                card.classList.add('active');
            }
        });
    }
    
    function updateButtons() {
        prevBtn.disabled = currentIndex === 0;
        nextBtn.disabled = currentIndex >= maxIndex;
        
        // Add visual feedback
        if (prevBtn.disabled) {
            prevBtn.style.opacity = '0.4';
        } else {
            prevBtn.style.opacity = '1';
        }
        
        if (nextBtn.disabled) {
            nextBtn.style.opacity = '0.4';
        } else {
            nextBtn.style.opacity = '1';
        }
    }
    
    function updateCounter() {
        if (projectCounter) {
            projectCounter.textContent = currentIndex + 1;
        }
    }
    
    function slideProjects() {
        const translateX = -currentIndex * cardWidth;
        projectsGrid.style.transform = `translateX(${translateX}px)`;
        updateButtons();
        updateCounter();
        updateActiveCards();
        
        // Add smooth animation class
        projectsGrid.classList.add('sliding');
        setTimeout(() => {
            projectsGrid.classList.remove('sliding');
        }, 600);
    }
    
    function goToNext() {
        if (currentIndex < maxIndex) {
            currentIndex++;
            slideProjects();
        }
    }
    
    function goToPrev() {
        if (currentIndex > 0) {
            currentIndex--;
            slideProjects();
        }
    }
    
    prevBtn.addEventListener('click', () => {
        if (!prevBtn.disabled) {
            goToPrev();
        }
    });
    
    nextBtn.addEventListener('click', () => {
        if (!nextBtn.disabled) {
            goToNext();
        }
    });
    
    // Add touch/swipe support for mobile
    let startX = 0;
    let endX = 0;
    
    projectsGrid.addEventListener('touchstart', (e) => {
        startX = e.touches[0].clientX;
    });
    
    projectsGrid.addEventListener('touchend', (e) => {
        endX = e.changedTouches[0].clientX;
        const diff = startX - endX;
        
        if (Math.abs(diff) > 50) { // Minimum swipe distance
            if (diff > 0 && !nextBtn.disabled) {
                goToNext();
            } else if (diff < 0 && !prevBtn.disabled) {
                goToPrev();
            }
        }
    });
    
    // Add keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && !prevBtn.disabled) {
            goToPrev();
        } else if (e.key === 'ArrowRight' && !nextBtn.disabled) {
            goToNext();
        }
    });
    
    // Auto-play functionality (optional)
    let autoPlayInterval;
    
    function startAutoPlay() {
        autoPlayInterval = setInterval(() => {
            if (currentIndex >= maxIndex) {
                currentIndex = 0;
            } else {
                currentIndex++;
            }
            slideProjects();
        }, 5000); // Change slide every 5 seconds
    }
    
    function stopAutoPlay() {
        if (autoPlayInterval) {
            clearInterval(autoPlayInterval);
        }
    }
    
    // Start auto-play on hover
    projectsGrid.addEventListener('mouseenter', stopAutoPlay);
    projectsGrid.addEventListener('mouseleave', startAutoPlay);
    
    // Initialize everything
    updateButtons();
    updateCounter();
    updateActiveCards();
    
    // Start auto-play after 3 seconds
    setTimeout(startAutoPlay, 3000);
}

// Achievements Section Functions
function showAllCertificates() {
    console.log('showAllCertificates called');
    const allCertificates = document.getElementById('allCertificates');
    const featuredAchievements = document.querySelector('.featured-achievements');
    
    console.log('allCertificates:', allCertificates);
    console.log('featuredAchievements:', featuredAchievements);
    
    if (allCertificates && featuredAchievements) {
        // Hide the featured achievements
        featuredAchievements.style.display = 'none';
        
        // Show all certificates section
        allCertificates.style.display = 'block';
        allCertificates.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Add animation
        allCertificates.style.opacity = '0';
        allCertificates.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            allCertificates.style.transition = 'all 0.5s ease';
            allCertificates.style.opacity = '1';
            allCertificates.style.transform = 'translateY(0)';
        }, 100);
    } else {
        console.log('Elements not found!');
    }
}

function hideAllCertificates() {
    const allCertificates = document.getElementById('allCertificates');
    const featuredAchievements = document.querySelector('.featured-achievements');
    
    if (allCertificates && featuredAchievements) {
        // Hide all certificates section
        allCertificates.style.transition = 'all 0.3s ease';
        allCertificates.style.opacity = '0';
        allCertificates.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            allCertificates.style.display = 'none';
            featuredAchievements.style.display = 'grid';
            
            // Scroll back to achievements section
            document.getElementById('achievements').scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }, 300);
    }
}

// Hackathons Section Functions
function showAllHackathons() {
    console.log('showAllHackathons called');
    const allHackathons = document.getElementById('allHackathons');
    const featuredAchievements = document.querySelector('.featured-achievements');
    
    console.log('allHackathons:', allHackathons);
    console.log('featuredAchievements:', featuredAchievements);
    
    if (allHackathons && featuredAchievements) {
        // Hide the featured achievements
        featuredAchievements.style.display = 'none';
        
        // Show all hackathons section
        allHackathons.style.display = 'block';
        allHackathons.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Add animation
        allHackathons.style.opacity = '0';
        allHackathons.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            allHackathons.style.transition = 'all 0.5s ease';
            allHackathons.style.opacity = '1';
            allHackathons.style.transform = 'translateY(0)';
        }, 100);
    } else {
        console.log('Elements not found!');
    }
}

function hideAllHackathons() {
    const allHackathons = document.getElementById('allHackathons');
    const featuredAchievements = document.querySelector('.featured-achievements');
    
    if (allHackathons && featuredAchievements) {
        // Hide all hackathons section
        allHackathons.style.transition = 'all 0.3s ease';
        allHackathons.style.opacity = '0';
        allHackathons.style.transform = 'translateY(30px)';
        
        setTimeout(() => {
            allHackathons.style.display = 'none';
            featuredAchievements.style.display = 'grid';
            
            // Scroll back to achievements section
            document.getElementById('achievements').scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        }, 300);
    }
}

// Function to show volunteer details
function scrollToVolunteer() {
    const volunteerDetails = document.getElementById('volunteer-details');
    if (volunteerDetails) {
        volunteerDetails.style.display = 'block';
        volunteerDetails.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
        
        // Add fade-in animation
        volunteerDetails.style.opacity = '0';
        volunteerDetails.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            volunteerDetails.style.transition = 'all 0.5s ease';
            volunteerDetails.style.opacity = '1';
            volunteerDetails.style.transform = 'translateY(0)';
        }, 100);
    }
}

// Function to hide volunteer details
function hideVolunteerDetails() {
    const volunteerDetails = document.getElementById('volunteer-details');
    if (volunteerDetails) {
        volunteerDetails.style.transition = 'all 0.3s ease';
        volunteerDetails.style.opacity = '0';
        volunteerDetails.style.transform = 'translateY(-20px)';
        
        setTimeout(() => {
            volunteerDetails.style.display = 'none';
        }, 300);
    }
}

// Export functions for potential external use
window.PortfolioApp = {
    animateCounter,
    typeWriter,
    debounce,
    showNotification,
    createParticles,
    initProjectNavigation,
    showAllCertificates,
    hideAllCertificates,
    showAllHackathons,
    hideAllHackathons,
    scrollToVolunteer,
    hideVolunteerDetails
}; 