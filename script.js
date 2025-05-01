document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.getElementById("themeToggle");
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  if (localStorage.getItem("theme") === "dark" || (prefersDark && !localStorage.getItem("theme"))) {
    document.body.classList.add("dark");
  }

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("theme", document.body.classList.contains("dark") ? "dark" : "light");
  });

  // Contact form
  document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
    alert("Thank you for contacting me! I'll get back to you soon.");
    this.reset();
  });

  // Modal popup
  const galleryItems = document.querySelectorAll(".item");
  const modal = document.createElement("div");
  modal.id = "modal";
  modal.className = "close-area";
  modal.innerHTML = `<img src="" alt="Preview" />`;
  document.body.appendChild(modal);

  galleryItems.forEach((item) => {
    item.addEventListener("click", () => {
      const imgSrc = item.getAttribute("data-img") || "https://via.placeholder.com/600";
      modal.style.display = "flex";
      modal.querySelector("img").src = imgSrc;
    });
  });

  modal.addEventListener("click", () => {
    modal.style.display = "none";
  });
});
...
