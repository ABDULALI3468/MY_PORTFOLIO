const popupcontainer = document.createElement("section");

const popup = (name, img, desc, tech, liveVersion, project_source) => {
  popupcontainer.classList.add("mobile-popup-container");
  popupcontainer.setAttribute("data-visible", "false");
  popupcontainer.classList.add("display-none");

  popupcontainer.innerHTML = `
  <div class="icon-image">
    <div class="back-cross">
      <img class="cross-popup-icon" src="../images/cross-icon.png" alt="" />
    </div>
    <div class="popup-image">
      <img src=${img} />
    </div>
  </div>
  <div class="title-and-tech">
    <div>
      <h1 class="popup-title">${name}</h1>
    </div>
    <div>
      <ul class="popup-tech">
        <li class="popup-tech-li">JavaScript</li>
        <li class="popup-tech-li">Webpack</li>
        <li class="popup-tech-li">CSS</li>
        <li class="popup-tech-li">Html</li>
        <li class="popup-tech-li">ES6 modules</li>
      </ul>
    </div>
  </div>
  <div class="popup-description">${desc}</div>
  <div class="popup-buttons">
    <div class="live-button">
      <a class="live" target="_blank" href=${liveVersion}>
        See Live
      </a>
      <img src="../images/live-icon.svg" alt="" />
    </div>
    <div class="live-button ml">
      <a class="live" target="_blank" href=${project_source}>
        See Source
      </a>
      <img src="../images/source-icon.svg" alt="" />
    </div>
  </div>
  `;

  document.body.appendChild(popupcontainer);

  const divbackcross = document.querySelector(".cross-popup-icon");

  divbackcross.addEventListener("click", () => {
    const popup = document.querySelector(".mobile-popup-container");
    const techDiv = popup.querySelector(".title-and-tech");
    const popupTech = popup.querySelector(".popup-tech");

    const visibility = popup.getAttribute("data-visible");

    if (visibility === "true") {
      popup.setAttribute("data-visible", "onRight");
    }

    setTimeout(() => {
      techDiv.childNodes.forEach((tech) => {
        techDiv.removeChild(tech);
      });
      techDiv.parentElement.removeChild(techDiv);

      popupTech.childNodes.forEach((tech) => {
        popupTech.removeChild(tech);
      });
      popupTech.parentElement.removeChild(popupTech);

      // remove children elements...
      popup.childNodes.forEach((child) => {
        popup.removeChild(child);
      });
      popup.parentElement.removeChild(popup);
      popup.setAttribute("data-visible", "false");
    }, 200);
    document.body.style.overflow = "auto";
  });
};

export default popup;
