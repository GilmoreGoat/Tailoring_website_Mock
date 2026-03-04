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
    businessName: "The Computerized Cobbler",

    // Format the phone number as it should appear on the site
    phoneDisplay: "(858) 558-9328",
    // Format the phone number for links (no spaces or special characters except + if needed)
    phoneLink: "8585589328",

    // Page title that appears in browser tabs and search results
    pageTitle: "The Computerized Cobbler - Expert Shoe & Leather Repair in San Diego",
    // Meta description with your business details for Google search results
    metaDescription: "Expert shoe repair, boot resoling, and leather restoration at The Computerized Cobbler in San Diego. Quality craftsmanship guaranteed.",

    // ----------------------------------------------------------------------------
    // 2. BRAND COLORS
    // ----------------------------------------------------------------------------
    // Change the hex codes below to match your brand colors
    colors: {
        navy: "#3E2723",        // Main dark color (used for backgrounds, navbar, titles)
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
    heroImage: "https://images.unsplash.com/photo-1549558549-415fe4c37b60?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80",
    // Main headline
    heroTitle: "Expert Shoe & Leather Repair in San Diego.",
    // Subheadline below the main title
    heroSubtitle: "Expert repairs, complete restoration, and trusted local service for your favorite footwear and leather accessories.",

    // ----------------------------------------------------------------------------
    // 4. SERVICES
    // ----------------------------------------------------------------------------
    // You can add, edit, or remove services in this list.
    services: [
        {
            icon: "👞",
            title: "Sole & Heel Replacement",
            description: "Complete resoling and heel block repairs to bring your favorite dress shoes back to life."
        },
        {
            icon: "✨",
            title: "Leather Conditioning",
            description: "Deep cleaning, polishing, and restoration to protect your footwear from the elements."
        },
        {
            icon: "👢",
            title: "Boot Repair & Hardware",
            description: "Zipper repair, hardware replacement, and weatherproofing for all types of boots."
        },
        {
            icon: "👜",
            title: "Handbag & Belt Restoration",
            description: "Strap repair, stitching, and leather care for your high-end accessories."
        }
    ],

    // ----------------------------------------------------------------------------
    // 5. REVIEWS & RATING
    // ----------------------------------------------------------------------------
    // Overall rating text displayed below reviews
    googleRatingText: "★ 4.6 Star Rating on Google",

    // Customer reviews to display
    reviews: [
        {
            stars: "★★★★★",
            text: "\"Incredible craftsmanship! They completely revived my favorite pair of boots. The new soles look better than when I bought them.\"",
            author: "- Sarah M."
        },
        {
            stars: "★★★★★",
            text: "\"The best shoe repair in San Diego. They fixed a broken heel and polished my dress shoes to perfection right before a big event.\"",
            author: "- James T."
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
    address: "📍 8915 Towne Centre Dr, Suite 114<br>San Diego, CA 92122",

    // Store hours
    hours: [
        "🕒 Mon-Fri: 10 AM - 6 PM",
        "🕒 Sat: 10 AM - 4 PM",
        "🕒 Sun: Closed"
    ],

    // Google Maps iframe URL source
    // Search your address on Google Maps, click "Share" -> "Embed a map", and copy the URL from the 'src' attribute.
    mapSrc: "https://maps.google.com/maps?q=8915%20Towne%20Centre%20Dr,%20San%20Diego,%20CA%2092122&t=&z=15&ie=UTF8&iwloc=&output=embed",

    // Copyright text at the very bottom
    copyrightText: "&copy; 2026 The Computerized Cobbler. All rights reserved."
};
