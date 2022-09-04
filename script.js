const hamburger = document.querySelector(".hamburger");
const header = document.querySelector(".header-desktop");
const mobileMenu = document.querySelector(".header-desktop");
const crossicon = document.querySelector(".cross-icon");
const about = document.getElementById("about");
const contact = document.getElementById("contact");
const portfolio = document.getElementById("portfolio");

hamburger.addEventListener("click", () => {
  // mobileMenu.style.display = "flex";
  document.body.style.overflow = "hidden";

  const visibility = header.getAttribute("data-visible");
  if (visibility === "false") {
    header.setAttribute("data-visible", true);
    console.log('header is false')
  } else if (visibility === "true") {
    header.setAttribute("data-visible", false);
    console.log('header is true')
  }
});

crossicon.addEventListener("click", () => {
  // mobileMenu.style.display = "none";
  header.setAttribute("data-visible", false);
  document.body.style.overflow = "auto";
});

portfolio.addEventListener("click", () => {
  header.setAttribute("data-visible", false);
  document.body.style.overflow = "auto";
});

about.addEventListener("click", () => {
  header.setAttribute("data-visible", false);
  document.body.style.overflow = "auto";
});

contact.addEventListener("click", () => {
  header.setAttribute("data-visible", false);
  document.body.style.overflow = "auto";
});
