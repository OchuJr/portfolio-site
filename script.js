// script.js

document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "Toggle Dark Mode";
  toggleBtn.className = "toggle-mode";
  document.body.appendChild(toggleBtn);

  toggleBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("dark-mode", document.body.classList.contains("dark-mode"));
  });

  if (localStorage.getItem("dark-mode") === "true") {
    document.body.classList.add("dark-mode");
  }
});
