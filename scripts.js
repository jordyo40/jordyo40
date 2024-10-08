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
