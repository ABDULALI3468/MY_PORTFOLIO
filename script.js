const hamburger = document.querySelector(".hamburger");
const list = document.querySelector(".header-desktop");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  list.classList.toggle("active");
  nav.classList.toggle("hidden")
});
