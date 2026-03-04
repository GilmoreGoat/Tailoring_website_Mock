// ================================================================================
// OWNER's MANUAL: HOW TO CUSTOMIZE THIS WEBSITE
// ================================================================================
//
// This file contains all the customizable settings for your website.
// Simply update the values below inside the quotation marks to change the
// text, colors, images, and links on your site.
//
// Save this file and refresh your website to see the changes immediately.
// ================================================================================

window.SiteConfig = {
    // ----------------------------------------------------------------------------
    // 1. BASIC BUSINESS INFO & SEO
    // ----------------------------------------------------------------------------
    businessName: "Tailoring Express",

    // Format the phone number as it should appear on the site
    phoneDisplay: "(858) 555-0199",
    // Format the phone number for links (no spaces or special characters except + if needed)
    phoneLink: "8585550199",

    // Page title that appears in browser tabs and search results
    pageTitle: "Tailoring Express - Alterations & Tailoring in University City",
    // Meta description with your business details for Google search results
    metaDescription: "Expert alterations and tailoring in University City, San Diego. Precision fits, fast turnaround, and trusted local service.",

    // ----------------------------------------------------------------------------
    // 2. BRAND COLORS
    // ----------------------------------------------------------------------------
    // Change the hex codes below to match your brand colors
    colors: {
        navy: "#0A192F",        // Main dark color (used for backgrounds, navbar, titles)
        white: "#FFFFFF",       // Main light color
        gold: "#D4AF37",        // Primary accent color (buttons, icons, highlights)
        goldHover: "#b5952f",   // Darker shade of the accent color for hover effects
        lightBg: "#f9f9f9",     // Light background for alternate sections
        textDark: "#333333",    // Main text color
        textLight: "#666666"    // Lighter text color for secondary info
    },

    // ----------------------------------------------------------------------------
    // 3. HERO SECTION (TOP OF PAGE)
    // ----------------------------------------------------------------------------
    // URL of the main background image
    heroImage: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    // Main headline
    heroTitle: "Expert Alterations & Tailoring in University City.",
    // Subheadline below the main title
    heroSubtitle: "Precision fits, fast turnaround, and trusted local service for all your clothing needs.",

    // ----------------------------------------------------------------------------
    // 4. SERVICES
    // ----------------------------------------------------------------------------
    // You can add, edit, or remove services in this list.
    services: [
        {
            icon: "👔",
            title: "Suit & Dress Alterations",
            description: "Expert alterations for jackets, trousers, bridal gowns, and formal wear."
        },
        {
            icon: "👖",
            title: "Everyday Hemming & Tapering",
            description: "Perfect fit for your everyday jeans, slacks, and skirts."
        },
        {
            icon: "🧵",
            title: "Repairs & Zippers",
            description: "Quality patching, button replacement, and zipper fixes to extend garment life."
        },
        {
            icon: "📏",
            title: "Custom Fitting",
            description: "Transforming off-the-rack clothing to look and feel completely bespoke."
        }
    ],

    // ----------------------------------------------------------------------------
    // 5. REVIEWS & RATING
    // ----------------------------------------------------------------------------
    // Overall rating text displayed below reviews
    googleRatingText: "★ 4.2 Star Rating",

    // Customer reviews to display
    reviews: [
        {
            stars: "★★★★★",
            text: "\"Absolutely saved my suit for a wedding. Fast, professional, and fits perfectly now.\"",
            author: "- Local Customer"
        },
        {
            stars: "★★★★★",
            text: "\"The only place in San Diego I trust with my dresses. Fair pricing and incredible attention to detail.\"",
            author: "- Local Customer"
        }
    ],

    // ----------------------------------------------------------------------------
    // 6. CONTACT FORM
    // ----------------------------------------------------------------------------
    // Formspree endpoint URL so you receive the emails from the contact form
    formspreeEndpoint: "https://formspree.io/f/mjgeqebp",
    // Success message shown after submitting the form
    formSuccessMessage: "Thank you! We will contact you shortly.",
    // Error message shown if the form fails to submit
    formErrorMessage: "Oops! There was a problem submitting your form",

    // ----------------------------------------------------------------------------
    // 7. FOOTER & LOCATION
    // ----------------------------------------------------------------------------
    // Business address (use <br> for line breaks)
    address: "📍 3232 Governor Dr<br>San Diego, CA 92122",

    // Store hours
    hours: [
        "🕒 Mon-Fri: 9 AM - 6 PM",
        "🕒 Sat: 10 AM - 4 PM",
        "🕒 Sun: Closed"
    ],

    // Google Maps iframe URL source
    // Search your address on Google Maps, click "Share" -> "Embed a map", and copy the URL from the 'src' attribute.
    mapSrc: "https://maps.google.com/maps?q=Tailoring%20Express,%203232%20Governor%20Dr,%20San%20Diego,%20CA%2092122&t=&z=15&ie=UTF8&iwloc=&output=embed",

    // Copyright text at the very bottom
    copyrightText: "&copy; 2026 Tailoring Express. All rights reserved."
};
