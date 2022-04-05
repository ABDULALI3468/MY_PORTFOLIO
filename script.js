const hamburger = document.querySelector(".hamburger");
const list = document.querySelector(".header-desktop");
console.log(hamburger);
console.log(list);
console.log(document);

hamburger.addEventListener("click", () => {
  list.classList.toggle("active");
});
