const hamburger = document.querySelector(".hamburger");
const mobileMenu = document.querySelector(".header-desktop");
const crossicon = document.querySelector(".cross-icon");
const crossPopupIcon = document.querySelector(".back-cross");
console.log(crossPopupIcon);
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

  // document.body.classList.remove("overflow")
  // document.body.classList.add("hidden")
  // document.body.style.fontSize = "20rem";
  // document.body.style.setProperty("overflow", "initial");
  // document.body.style.removeProperty("overflow");
});

crossPopupIcon.addEventListener("click", () => {
  // mobileMenu.style.display = "none";
  // document.body.classList.remove("overflow")
  // document.body.classList.add("hidden")
  // body.style.fontSize = "20rem";
  // document.body.style.setProperty("overflow", "initial");
  // document.body.style.removeProperty("overflow");
});

portfolio.addEventListener("click", () => {
  mobileMenu.style.display = "none";
  mobileMenu.style.opacity = 0;
  document.body.style.overflow = "auto";

  console.log("working");
});
about.addEventListener("click", () => {
  mobileMenu.style.display = "none";
  document.body.style.overflow = "auto";
  console.log("working");
});

contact.addEventListener("click", () => {
  mobileMenu.style.display = "none";
  document.body.style.overflow = "auto";
  console.log("working");
});
