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
