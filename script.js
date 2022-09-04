const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".header-desktop");
const crossicon = document.querySelector(".cross-icon");
const about = document.getElementById("about");
const contact = document.getElementById("contact");
const portfolio = document.getElementById("portfolio");

hamburger.addEventListener("click", () => {
  mobileMenu.style.display = "flex";
  document.body.style.overflow = "hidden";
});

crossicon.addEventListener("click", () => {
  mobileMenu.style.display = "none";
  document.body.style.overflow = "auto";
});

portfolio.addEventListener("click", () => {
  mobileMenu.style.display = "none";
  document.body.style.overflow = "auto";
});

about.addEventListener("click", () => {
  mobileMenu.style.display = "none";
  document.body.style.overflow = "auto";
});

contact.addEventListener("click", () => {
  mobileMenu.style.display = "none";
  document.body.style.overflow = "auto";
});
