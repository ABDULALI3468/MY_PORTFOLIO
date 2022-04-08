const closePop = document.querySelector('.cross-popup-icon');

function cards() {
  const gridContainer = document.querySelector('.grid');

  const divStoriesCard = document.createElement('div');
  divStoriesCard.classList.add('stories-card');

  const divWhiteBack = document.createElement('div');
  divWhiteBack.classList.add('white-back');

  const h3CardTitle = document.createElement('h3');
  h3CardTitle.classList.add('card-title');
  h3CardTitle.innerText = 'Multi-Post Stories Gain+Glory';

  const ulList = document.createElement('ul');
  ulList.classList.add('list');

  const liLangName1 = document.createElement('li');
  liLangName1.classList.add('lang-name');
  liLangName1.innerText = 'Ruby on rails';
  const liLangName2 = document.createElement('li');
  liLangName2.classList.add('lang-name');
  liLangName2.innerText = 'css';
  const liLangName3 = document.createElement('li');
  liLangName3.classList.add('lang-name');
  liLangName3.innerText = 'Javascript';
  const liLangName4 = document.createElement('li');
  liLangName4.classList.add('lang-name');
  liLangName4.innerText = 'html';

  const pseeprbutton = document.createElement('p');
  pseeprbutton.classList.add('seepr-button');
  pseeprbutton.innerText = 'See Project';

  divWhiteBack.appendChild(h3CardTitle);
  divWhiteBack.appendChild(ulList);
  ulList.appendChild(liLangName1);
  ulList.appendChild(liLangName2);
  ulList.appendChild(liLangName3);
  ulList.appendChild(liLangName4);
  divWhiteBack.appendChild(pseeprbutton);
  divStoriesCard.appendChild(divWhiteBack);
  gridContainer.appendChild(divStoriesCard);
}

for (let i = 1; i < 7; i += 1) {
  cards();
}

const projects = [
  {
    title: "Multi-Post Stories Gain+Glory card 1",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageUrl: "./images/popup-mobile-pic.svg",
    technologies: ["Ruby on rails", "css", "JavaScript", "html"],
    liveVersion: "https://www.google.com/",
    source: "https://github.com/",
  },

  {
    title: "Multi-Post Stories Gain+Glory card 2",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageUrl: "./images/popup-mobile-pic.svg",
    technologies: ["Ruby on rails", "css", "JavaScript", "html"],
    liveVersion: "https://www.google.com/",
    source: "https://github.com/",
  },

  {
    title: "Multi-Post Stories Gain+Glory card 3",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageUrl: "./images/popup-mobile-pic.svg",
    technologies: ["Ruby on rails", "css", "JavaScript", "html"],
    liveVersion: "https://www.google.com/",
    source: "https://github.com/",
  },

  {
    title: "Multi-Post Stories Gain+Glory card 4",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageUrl: "./images/popup-mobile-pic.svg",
    technologies: ["Ruby on rails", "css", "JavaScript", "html"],
    liveVersion: "https://www.google.com/",
    source: "https://github.com/",
  },

  {
    title: "Multi-Post Stories Gain+Glory card 5",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageUrl: "./images/popup-mobile-pic.svg",
    technologies: ["Ruby on rails", "css", "JavaScript", "html"],
    liveVersion: "https://www.google.com/",
    source: "https://github.com/",
  },

  {
    title: "Multi-Post Stories Gain+Glory card 6",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea",
    imageUrl: "./images/popup-mobile-pic.svg",
    technologies: ["Ruby on rails", "css", "JavaScript", "html"],
    liveVersion: "https://www.google.com/",
    source: "https://github.com/",
  }
];

const popupcontainer = document.createElement('section');
popupcontainer.classList.add('mobile-popup-container');
popupcontainer.classList.add('display-none');

const diviconimage = document.createElement('div');
diviconimage.classList.add('icon-image');

const divbackcross = document.createElement('div');
divbackcross.classList.add('back-cross');

const imgcross = document.createElement('img');
imgcross.classList.add('cross-popup-icon');
imgcross.src = './images/cross-icon.png';
imgcross.alt = '';

const divpopupimage = document.createElement('div');
divpopupimage.classList.add('popup-image');

const popupimage = document.createElement('img');
popupimage.src = projects[0].imageUrl;

const titleandtech = document.createElement('div');
titleandtech.classList.add('title-and-tech');

const divtitle = document.createElement('div');
const popuptitle = document.createElement('h1');
popuptitle.innerText = projects[0].title;
popuptitle.classList.add('popup-title');

const divtech = document.createElement('div');
const divul = document.createElement('ul');
divul.classList.add('popup-tech');

const divli1 = document.createElement('li');
divli1.innerText = 'Html';
divli1.classList.add('popup-tech-li');
const divli2 = document.createElement('li');
divli2.innerText = 'Ruby in rails';
divli2.classList.add('popup-tech-li');
const divli3 = document.createElement('li');
divli3.innerText = 'css';
divli3.classList.add('popup-tech-li');
const divli4 = document.createElement('li');
divli4.innerText = 'Javascript';
divli4.classList.add('popup-tech-li');

const description = document.createElement('div');
description.classList.add('popup-description');
description.innerText = projects[0].description;

const buttons = document.createElement('div');
buttons.classList.add('popup-buttons');

const live = document.createElement('div');
live.classList.add('live-button');
const plive = document.createElement('p');
plive.innerText = 'See Live';
const imglive = document.createElement('img');
imglive.src = './images/live-icon.svg';
imglive.alt = '';

const source = document.createElement('div');
source.classList.add('live-button');
source.classList.add('ml');
const psource = document.createElement('p');
psource.innerText = 'See Source';
const imgsource = document.createElement('img');
imgsource.src = './images/source-icon.svg';
imgsource.alt = '';

document.body.appendChild(popupcontainer);
popupcontainer.appendChild(diviconimage);
diviconimage.appendChild(divbackcross);
divbackcross.appendChild(imgcross);
diviconimage.appendChild(divpopupimage);
divpopupimage.appendChild(popupimage);

popupcontainer.appendChild(titleandtech);
titleandtech.appendChild(divtitle);
divtitle.appendChild(popuptitle);
titleandtech.appendChild(divtech);
divtech.appendChild(divul);
divul.appendChild(divli1);
divul.appendChild(divli2);
divul.appendChild(divli3);
divul.appendChild(divli4);

popupcontainer.appendChild(description);
popupcontainer.appendChild(buttons);
buttons.appendChild(live);
live.appendChild(plive);
live.appendChild(imglive);
buttons.appendChild(source);
source.appendChild(psource);
source.appendChild(imgsource);

const storybutton = document.querySelectorAll('.seepr-button');

for (let i = 0; i < storybutton.length; i += 1) {
  storybutton[i].addEventListener('click', () => {
    popupcontainer.classList.remove('display-none');
    popupcontainer.classList.add('display-flex');
  });
}

divbackcross.addEventListener('click', () => {
  popupcontainer.classList.remove('display-flex');
  popupcontainer.classList.add('display-none');
});
