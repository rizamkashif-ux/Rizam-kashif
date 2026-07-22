// =========================================
// TYPING ANIMATION
// =========================================

// The words that will appear one by one
const words = [
    "AI Student",
    "Front-End Developer",
    "Python Developer",
    "AI Enthusiast"
];

// Get the HTML element where the text will appear
const typingElement = document.getElementById("typing");

// Current word number
let wordIndex = 0;

// Current letter number
let letterIndex = 0;

// This controls whether we are typing or deleting
let isDeleting = false;


// Function for typing animation
function typeEffect() {

    // Get the current word
    const currentWord = words[wordIndex];

    // If deleting, remove one character
    // Otherwise, add one character
    if (isDeleting) {

        typingElement.textContent =
            currentWord.substring(0, letterIndex - 1);

        letterIndex--;

    } else {

        typingElement.textContent =
            currentWord.substring(0, letterIndex + 1);

        letterIndex++;

    }


    // Speed of the animation
    let typingSpeed = isDeleting ? 60 : 120;


    // When the complete word has been typed
    if (!isDeleting && letterIndex === currentWord.length) {

        // Wait before deleting
        typingSpeed = 1500;

        isDeleting = true;

    }


    // When the word has been completely deleted
    else if (isDeleting && letterIndex === 0) {

        isDeleting = false;

        // Move to the next word
        wordIndex++;

        // Return to first word after the last word
        if (wordIndex === words.length) {

            wordIndex = 0;

        }

        // Small delay before typing next word
        typingSpeed = 500;

    }


    // Run the function again
    setTimeout(typeEffect, typingSpeed);

}


// Start the typing animation
typeEffect();


// =========================================
// NAVBAR SCROLL EFFECT
// =========================================

// Get the header
const header = document.querySelector("header");

// Detect when the user scrolls
window.addEventListener("scroll", function () {

    // If the user scrolls more than 50 pixels
    if (window.scrollY > 50) {

        // Add a darker background
        header.style.background = "rgba(7, 11, 26, 0.95)";

        // Add shadow
        header.style.boxShadow =
            "0 5px 20px rgba(0, 0, 0, 0.3)";

    } else {

        // Return to the original background
        header.style.background =
            "rgba(8, 12, 30, 0.75)";

        header.style.boxShadow = "none";

    }

});


// =========================================
// SMOOTH SCROLLING
// =========================================

// Select all links that start with #
const navigationLinks =
    document.querySelectorAll('a[href^="#"]');


// Add click event to each link
navigationLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        // Get the target section
        const targetId =
            this.getAttribute("href");

        // Ignore empty # links
        if (targetId === "#") {

            return;

        }

        // Find the section
        const targetSection =
            document.querySelector(targetId);

        // If the section exists
        if (targetSection) {

            // Prevent default jump
            event.preventDefault();

            // Smoothly scroll to section
            targetSection.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

});


// =========================================
// BUTTON CLICK MESSAGE
// =========================================

// Get the Contact Me button
const contactButton =
    document.querySelector(".secondary");


// Check if the button exists
if (contactButton) {

    contactButton.addEventListener("click", function () {

        console.log("User clicked Contact Me");

    });

}


// =========================================
// PROFILE IMAGE HOVER EFFECT
// =========================================

const profileImage =
    document.querySelector(".hero-image img");


if (profileImage) {

    profileImage.addEventListener("mouseenter", function () {

        console.log("Profile image hovered");

    });

}


// =========================================
// CURRENT YEAR IN FOOTER
// =========================================

// Find the footer paragraph
const footerText =
    document.querySelector("footer p");


// Automatically update the year
if (footerText) {

    const currentYear =
        new Date().getFullYear();

    footerText.innerHTML =
        `© ${currentYear} Rizam Kashif. All Rights Reserved.`;

}
// =========================================
// CONTACT FORM
// =========================================

const contactForm = document.getElementById("contactForm");

const formMessage = document.getElementById("formMessage");


if (contactForm) {

    contactForm.addEventListener("submit", function (event) {

        // Prevent the page from refreshing
        event.preventDefault();


        // Get the user's name
        const name = document.getElementById("name").value;


        // Display a success message
        formMessage.textContent =
            `Thank you, ${name}! Your message has been received.`;


        // Clear the form
        contactForm.reset();

    });

}// Get the hamburger button
const menuToggle = document.getElementById("menu-toggle");

// Get the navigation menu
const navLinks = document.getElementById("nav-links");

// When hamburger is clicked
menuToggle.addEventListener("click", function () {

    // Show or hide the navigation menu
    navLinks.classList.toggle("active");

});