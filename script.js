const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".navbar nav");

menuBtn.addEventListener("click", () => {
nav.classList.toggle("show");
});

/* Close mobile menu after clicking a link */

const navLinks = document.querySelectorAll(".navbar nav a");

navLinks.forEach(link => {
link.addEventListener("click", () => {
nav.classList.remove("show");
});
});