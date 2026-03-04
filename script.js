// Hamburger Menu Toggle
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Close menu when clicking a link
document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}));

// Animate hamburger to X
hamburger.addEventListener("click", function() {
    const bars = this.querySelectorAll(".bar");
    if (this.classList.contains("active")) {
        bars[0].style.transform = "translateY(8px) rotate(45deg)";
        bars[1].style.opacity = "0";
        bars[2].style.transform = "translateY(-8px) rotate(-45deg)";
    } else {
        bars[0].style.transform = "none";
        bars[1].style.opacity = "1";
        bars[2].style.transform = "none";
    }
});

// Reset hamburger styles on resize if moving to desktop
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
        const bars = hamburger.querySelectorAll(".bar");
        bars[0].style.transform = "none";
        bars[1].style.opacity = "1";
        bars[2].style.transform = "none";
    }
});

// Smooth Scrolling is handled by CSS (scroll-behavior: smooth),
// but adding fallback for older browsers or specific offset needs
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Only prevent default if it's strictly an anchor link on the same page
        if (this.getAttribute('href').startsWith('#')) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                const headerOffset = 70; // Adjust based on navbar height
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        }
    });
});

// ============================================================================
// DYNAMIC CONFIGURATION LOADER
// ============================================================================
function applyConfig() {
    if (!window.SiteConfig) return;

    const config = window.SiteConfig;

    // 1. Basic Info & SEO
    document.title = config.pageTitle;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", config.metaDescription);

    const navLogo = document.getElementById('nav-logo');
    if (navLogo) navLogo.textContent = config.businessName;

    const phoneLinks = document.querySelectorAll('.nav-phone');
    phoneLinks.forEach(link => {
        link.href = `tel:${config.phoneLink}`;
        if (link.id === 'hero-phone-btn') {
            link.textContent = `Call: ${config.phoneDisplay}`;
        } else if (link.id === 'footer-phone') {
            link.textContent = config.phoneDisplay;
        }
    });

    // 2. Colors
    const root = document.documentElement;
    if (config.colors) {
        if (config.colors.navy) root.style.setProperty('--navy', config.colors.navy);
        if (config.colors.white) root.style.setProperty('--white', config.colors.white);
        if (config.colors.gold) root.style.setProperty('--gold', config.colors.gold);
        if (config.colors.goldHover) root.style.setProperty('--gold-hover', config.colors.goldHover);
        if (config.colors.lightBg) root.style.setProperty('--light-bg', config.colors.lightBg);
        if (config.colors.textDark) root.style.setProperty('--text-dark', config.colors.textDark);
        if (config.colors.textLight) root.style.setProperty('--text-light', config.colors.textLight);
    }

    // 3. Hero Section
    const heroImage = document.getElementById('hero-image');
    if (heroImage) heroImage.src = config.heroImage;

    const heroTitle = document.getElementById('hero-title');
    if (heroTitle) heroTitle.textContent = config.heroTitle;

    const heroSubtitle = document.getElementById('hero-subtitle');
    if (heroSubtitle) heroSubtitle.textContent = config.heroSubtitle;

    // 4. Services
    const servicesGrid = document.getElementById('services-grid');
    if (servicesGrid && config.services && config.services.length > 0) {
        servicesGrid.innerHTML = '';
        config.services.forEach(service => {
            const card = document.createElement('div');
            card.className = 'service-card';
            card.innerHTML = `
                <div class="service-icon">${service.icon}</div>
                <h3 class="service-title">${service.title}</h3>
                <p class="service-desc">${service.description}</p>
            `;
            servicesGrid.appendChild(card);
        });
    }

    // 5. Reviews
    const reviewsGrid = document.getElementById('reviews-grid');
    if (reviewsGrid && config.reviews && config.reviews.length > 0) {
        reviewsGrid.innerHTML = '';
        config.reviews.forEach(review => {
            const card = document.createElement('div');
            card.className = 'review-card';
            card.innerHTML = `
                <div class="stars">${review.stars}</div>
                <p class="review-text">${review.text}</p>
                <p class="review-author">${review.author}</p>
            `;
            reviewsGrid.appendChild(card);
        });
    }

    const ratingText = document.getElementById('google-rating-text');
    if (ratingText) ratingText.textContent = config.googleRatingText;

    // 6. Contact Form
    const quoteForm = document.getElementById('quote-form');
    if (quoteForm) {
        quoteForm.action = config.formspreeEndpoint;
        // The success/error alerts are handled in the event listener below
    }

    // 7. Footer & Location
    const footerAddress = document.getElementById('footer-address');
    if (footerAddress) footerAddress.innerHTML = config.address;

    const footerHours = document.getElementById('footer-hours');
    if (footerHours && config.hours) {
        footerHours.innerHTML = config.hours.map(hour => `<p>${hour}</p>`).join('');
    }

    const mapIframe = document.getElementById('footer-map-iframe');
    if (mapIframe) mapIframe.src = config.mapSrc;

    const copyrightText = document.getElementById('copyright-text');
    if (copyrightText) copyrightText.innerHTML = `<p>${config.copyrightText}</p>`;
}

document.addEventListener('DOMContentLoaded', applyConfig);
