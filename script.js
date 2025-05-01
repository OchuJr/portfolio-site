// script.js

// Dark mode toggle (optional if you implement a switch)
const body = document.body;

// Mobile nav toggle
const menuToggle = document.getElementById('menu-toggle');
const nav = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// Optional dark mode toggle
// Uncomment and attach this to a button if needed
// document.getElementById('dark-mode-toggle').addEventListener('click', () => {
//   body.classList.toggle('dark-mode');
// });
