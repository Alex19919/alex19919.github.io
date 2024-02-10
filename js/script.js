document.addEventListener("DOMContentLoaded", function() {
    document.body.style.opacity = "1";
    document.querySelector(".section").style.opacity = "1";
});

function toggleTheme() {
            const body = document.body;
            body.classList.toggle('light-mode');
            body.classList.toggle('dark-mode');
        }