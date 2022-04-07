function cards() {
  const body = document.body;
  const grid_container = document.querySelector(".grid");

  const div_stories_card = document.createElement("div");
  div_stories_card.classList.add("stories-card");

  const div_white_back = document.createElement("div");
  div_white_back.classList.add("white-back");

  const h3_card_title = document.createElement("h3");
  h3_card_title.classList.add("card-title");
  h3_card_title.innerText = "Multi-Post Stories Gain+Glory";

  const ul_list = document.createElement("ul");
  ul_list.classList.add("list");

  const li_lang_name_1 = document.createElement("li");
  li_lang_name_1.classList.add("lang-name");
  li_lang_name_1.innerText = "Ruby on rails";
  const li_lang_name_2 = document.createElement("li");
  li_lang_name_2.classList.add("lang-name");
  li_lang_name_2.innerText = "css";
  const li_lang_name_3 = document.createElement("li");
  li_lang_name_3.classList.add("lang-name");
  li_lang_name_3.innerText = "Javascript";
  const li_lang_name_4 = document.createElement("li");
  li_lang_name_4.classList.add("lang-name");
  li_lang_name_4.innerText = "html";

  const p_seepr_button = document.createElement("p");
  p_seepr_button.classList.add("seepr-button");
  p_seepr_button.innerText = "See Project";

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
