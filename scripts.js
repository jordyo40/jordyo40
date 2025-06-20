// scripts.js
// This is a JavaScript file that will be loaded in the HTML document

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

