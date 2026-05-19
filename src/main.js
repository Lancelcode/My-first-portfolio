const text = "Welcome to My Portfolio";
const typewriter = document.getElementById("typewriter");
let index = 0;

function type() {
    if (index < text.length) {
        typewriter.textContent += text[index];
        index++;
        setTimeout(type, 100);
    }
}

type();

const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector("nav ul");

hamburger.addEventListener("click", function() {
    navLinks.classList.toggle("open");
});

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
        }
    });
});

document.querySelectorAll(".fade-in").forEach(function(section) {
    observer.observe(section);
});

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function() {
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
        themeToggle.textContent = "☀️";
    } else {
        themeToggle.textContent = "🌙";
    }
});

const form = document.querySelector("form");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    if (!name || !email || !message) {
        alert("Please fill in all fields!");
        return;
    }

    alert(`Thanks ${name}! I'll get back to you soon.`);
    form.reset();
});