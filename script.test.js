/**
 * @jest-environment jsdom
 */

// This test file requires jest-environment-jsdom to be installed.
// Since installation is currently blocked by network issues,
// this file serves as the requested testing improvement for future use.

const fs = require('fs');
const path = require('path');

const scriptContent = fs.readFileSync(path.resolve(__dirname, 'script.js'), 'utf8');

describe('Hamburger Menu Toggle', () => {
    let hamburger;
    let navMenu;
    let bars;
    let navLinks;

    beforeEach(() => {
        // Mock DOM structure
        document.body.innerHTML = `
            <nav class="navbar">
                <div class="navbar-container">
                    <div class="hamburger">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </div>
                    <ul class="nav-menu">
                        <li><a href="#services" class="nav-link">Services</a></li>
                        <li><a href="#reviews" class="nav-link">Reviews</a></li>
                    </ul>
                </div>
            </nav>
        `;

        hamburger = document.querySelector('.hamburger');
        navMenu = document.querySelector('.nav-menu');
        bars = hamburger.querySelectorAll('.bar');
        navLinks = document.querySelectorAll('.nav-link');

        // Execute script in the context of the mocked DOM
        // Note: In a real test environment, you might need to handle
        // how the script is loaded/executed to avoid multiple event listeners.
        // For simplicity, we are re-executing it here.
        eval(scriptContent);
    });

    test('should toggle active class on click', () => {
        expect(hamburger.classList.contains('active')).toBe(false);
        expect(navMenu.classList.contains('active')).toBe(false);

        hamburger.click();

        expect(hamburger.classList.contains('active')).toBe(true);
        expect(navMenu.classList.contains('active')).toBe(true);

        hamburger.click();

        expect(hamburger.classList.contains('active')).toBe(false);
        expect(navMenu.classList.contains('active')).toBe(false);
    });

    test('should animate bars on click', () => {
        // Open
        hamburger.click();
        expect(bars[0].style.transform).toBe('translateY(8px) rotate(45deg)');
        expect(bars[1].style.opacity).toBe('0');
        expect(bars[2].style.transform).toBe('translateY(-8px) rotate(-45deg)');

        // Close
        hamburger.click();
        expect(bars[0].style.transform).toBe('none');
        expect(bars[1].style.opacity).toBe('1');
        expect(bars[2].style.transform).toBe('none');
    });

    test('should close menu when a nav link is clicked', () => {
        // Open menu
        hamburger.click();
        expect(navMenu.classList.contains('active')).toBe(true);

        // Click first link
        navLinks[0].click();

        expect(hamburger.classList.contains('active')).toBe(false);
        expect(navMenu.classList.contains('active')).toBe(false);
    });

    test('should reset menu on window resize above 768px', () => {
        // Open menu
        hamburger.click();
        expect(hamburger.classList.contains('active')).toBe(true);

        // Mock window.innerWidth
        global.innerWidth = 1024;

        // Trigger resize
        window.dispatchEvent(new Event('resize'));

        expect(hamburger.classList.contains('active')).toBe(false);
        expect(navMenu.classList.contains('active')).toBe(false);
        expect(bars[0].style.transform).toBe('none');
    });
});
