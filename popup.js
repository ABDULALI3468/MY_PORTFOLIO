const closePop = document.querySelector('.cross-popup-icon');

function cards() {
  const body = document.body;
  const grid_container = document.querySelector('.grid');

  const div_stories_card = document.createElement('div');
  div_stories_card.classList.add('stories-card');

  const div_white_back = document.createElement('div');
  div_white_back.classList.add('white-back');

  const h3_card_title = document.createElement('h3');
  h3_card_title.classList.add('card-title');
  h3_card_title.innerText = 'Multi-Post Stories Gain+Glory';

  const ul_list = document.createElement('ul');
  ul_list.classList.add('list');

  const li_lang_name_1 = document.createElement('li');
  li_lang_name_1.classList.add('lang-name');
  li_lang_name_1.innerText = 'Ruby on rails';
  const li_lang_name_2 = document.createElement('li');
  li_lang_name_2.classList.add('lang-name');
  li_lang_name_2.innerText = 'css';
  const li_lang_name_3 = document.createElement('li');
  li_lang_name_3.classList.add('lang-name');
  li_lang_name_3.innerText = 'Javascript';
  const li_lang_name_4 = document.createElement('li');
  li_lang_name_4.classList.add('lang-name');
  li_lang_name_4.innerText = 'html';

  const p_seepr_button = document.createElement('p');
  p_seepr_button.classList.add('seepr-button');
  p_seepr_button.innerText = 'See Project';

  div_white_back.appendChild(h3_card_title);
  div_white_back.appendChild(ul_list);
  ul_list.appendChild(li_lang_name_1);
  ul_list.appendChild(li_lang_name_2);
  ul_list.appendChild(li_lang_name_3);
  ul_list.appendChild(li_lang_name_4);
  div_white_back.appendChild(p_seepr_button);
  div_stories_card.appendChild(div_white_back);
  grid_container.appendChild(div_stories_card);
}

for (let i = 1; i < 7; i++) {
  cards();
}

const projects = [
  {
    title: 'Multi-Post Stories Gain+Glory',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the relea',
    imageUrl: './images/popup-mobile-pic.svg',
    technologies: ['Ruby on rails', 'css', 'JavaScript', 'html'],
    liveVersion: 'https://www.google.com/',
    source: 'https://github.com/',
  },
];

console.log(projects[0]['imageUrl'])


const body = document.body;
const popup_container = document.createElement('section');
popup_container.classList.add('mobile-popup-container');
popup_container.classList.add('display-none');

const div_icon_image = document.createElement('div');
div_icon_image.classList.add('icon-image');

const div_back_cross = document.createElement('div');
div_back_cross.classList.add('back-cross');

const img_cross = document.createElement('img');
img_cross.classList.add('cross-popup-icon');
img_cross.src = './images/cross-icon.png';
img_cross.alt = '';

const div_popup_image = document.createElement('div');
div_popup_image.classList.add('popup-image');


const popup_image = document.createElement('img');
popup_image.src = projects[0]['imageUrl'];


const title_and_tech = document.createElement('div');
title_and_tech.classList.add('title-and-tech');

const div_title = document.createElement('div');
const popup_title = document.createElement('h1');
popup_title.innerText = projects[0]['title'];
popup_title.classList.add('popup-title');

const div_tech = document.createElement('div');
const div_ul = document.createElement('ul');
div_ul.classList.add('popup-tech')

const div_li_1 = document.createElement('li');
div_li_1.innerText = 'Html'
div_li_1.classList.add('popup-tech-li');
const div_li_2 = document.createElement('li');
div_li_2.innerText = 'Ruby in rails';
div_li_2.classList.add('popup-tech-li');
const div_li_3 = document.createElement('li');
div_li_3.innerText = 'css';
div_li_3.classList.add('popup-tech-li');
const div_li_4 = document.createElement('li');
div_li_4.innerText = 'Javascript';
div_li_4.classList.add('popup-tech-li');



const description = document.createElement('div')
description.classList.add('popup-description')
description.innerText = projects[0]['description']


const buttons = document.createElement('div');
buttons.classList.add('popup-buttons')

const live = document.createElement('div');
live.classList.add('live-button');
const p_live = document.createElement('p');
p_live.innerText = 'See Live'
const img_live = document.createElement('img');
img_live.src = './images/live-icon.svg';
img_live.alt =  '';

const source = document.createElement('div');
source.classList.add('live-button');
source.classList.add('ml');
const p_source = document.createElement('p');
p_source.innerText = 'See Source';
const img_source = document.createElement('img');
img_source.src = './images/source-icon.svg';
img_source.alt = '';


body.appendChild(popup_container);
popup_container.appendChild(div_icon_image);
div_icon_image.appendChild(div_back_cross);
div_back_cross.appendChild(img_cross)
div_icon_image.appendChild(div_popup_image);
div_popup_image.appendChild(popup_image);

popup_container.appendChild(title_and_tech);
title_and_tech.appendChild(div_title);
div_title.appendChild(popup_title);
title_and_tech.appendChild(div_tech);
div_tech.appendChild(div_ul);
div_ul.appendChild(div_li_1)
div_ul.appendChild(div_li_2)
div_ul.appendChild(div_li_3)
div_ul.appendChild(div_li_4)

popup_container.appendChild(description);
popup_container.appendChild(buttons);
buttons.appendChild(live);
live.appendChild(p_live);
live.appendChild(img_live);
buttons.appendChild(source);
source.appendChild(p_source);
source.appendChild(img_source);

const story_button = document.querySelectorAll('.seepr-button');
console.log(story_button)

for (let i=0 ; i<story_button.length ; i++) {
  story_button[i].addEventListener('click', () => {
    popup_container.classList.remove('display-none');
    popup_container.classList.add('display-flex');
  });
}

div_back_cross.addEventListener('click', () => {
  popup_container.classList.remove('display-flex');
  popup_container.classList.add('display-none');
});
