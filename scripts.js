console.log("JavaScript file loaded correctly");

const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function()){
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('is-active');
}

document.addEventListener("DOMContentLoaded", function () {
    const text = "Welcome";
    let index = 0;
    const speed = 150; // Adjust this for typing speed

    function typeEffect() {
        if (index < text.length) {
            document.getElementById("welcome-text").textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, speed);
        }
    }

    typeEffect();
});

// fade in about me
// Function to check if an element is in the viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Scroll event listener to apply the 'reveal' class when the element comes into view
window.addEventListener('scroll', function() {
    const aboutMeSection = document.querySelector('.aboutme__container');
    if (aboutMeSection && isInViewport(aboutMeSection)) {
        console.log("About Me section in view");

        aboutMeSection.classList.add('reveal');
    }
});
