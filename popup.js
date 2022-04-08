const closePop = document.querySelector('.cross-popup-icon');
const popupcontainer = document.createElement('section');
const diviconimage = document.createElement('div');
const divbackcross = document.createElement('div');
const imgcross = document.createElement('img');
const divpopupimage = document.createElement('div');
const popupimage = document.createElement('img');
const titleandtech = document.createElement('div');
const divtitle = document.createElement('div');
const popuptitle = document.createElement('h1');
const description = document.createElement('div');


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

const createPopup = (name, img, desc, tech) => {
  const divul = document.createElement('ul');
  console.log("iside creat pop")
popupcontainer.classList.add('mobile-popup-container');
popupcontainer.classList.add('display-none');


diviconimage.classList.add('icon-image');


divbackcross.classList.add('back-cross');


imgcross.classList.add('cross-popup-icon');
imgcross.src = './images/cross-icon.png';
imgcross.alt = '';


divpopupimage.classList.add('popup-image');


popupimage.src = img;


titleandtech.classList.add('title-and-tech');


popuptitle.innerText = name;
popuptitle.classList.add('popup-title');

for (let i = 0; i < tech.length; i += 1) {
  console.log('loop throw tech list')
  const divli = document.createElement('li');
  console.log(divli)
  divli.innerText = tech[i];
  divli.classList.add('popup-tech-li');
  divul.appendChild(divli);
  console.log(divul)
}


description.classList.add('popup-description');
description.innerText = desc;


const divtech = document.createElement('div');

divul.classList.add('popup-tech');



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


popupcontainer.appendChild(description);
popupcontainer.appendChild(buttons);
buttons.appendChild(live);
live.appendChild(plive);
live.appendChild(imglive);
buttons.appendChild(source);
source.appendChild(psource);
source.appendChild(imgsource);
}

const storybutton = document.querySelectorAll('.seepr-button');

for (let i = 0; i < storybutton.length; i += 1) {
  storybutton[i].addEventListener('click', () => {
    console.log('show popup')
    createPopup(projects[i].title, projects[i].imageUrl, projects[i].description, projects[i].technologies);
    popupcontainer.classList.remove('display-none');
    popupcontainer.classList.add('display-flex');
  });
}

divbackcross.addEventListener('click', () => {
  popupcontainer.classList.remove('display-flex');
  popupcontainer.classList.add('display-none');
});
