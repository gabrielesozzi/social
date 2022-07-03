import { DELETE, GET } from "./api.js";

const c = (el) => document.createElement(el);

const q = (el) => document.querySelector(el);

const createCard = (parent, imgLink, title, price) => {
  const wrapperEl = c("div");
  const titleEl = c("h3");
  const priceEl = c("p");
  const imgEl = c("img");

  wrapperEl.className = "wrapper";
  titleEl.className = "title";
  priceEl.className = "price";
  imgEl.className = "img";

  imgEl.setAttribute("alt", title);
  imgEl.setAttribute("src", imgLink);

  titleEl.textContent = title;
  priceEl.textContent = price;

  wrapperEl.append(imgEl, titleEl, priceEl);
  parent.appendChild(wrapperEl);
};

const createFriendEl = (parent, name, photo) => {
  const wrapper = c("div");
  const img = c("img");
  const par = c("p");

  wrapper.className = "friendCard";
  img.setAttribute("alt", name);
  img.setAttribute("src", photo);
  par.textContent = name;

  wrapper.append(img, par);
  parent.appendChild(wrapper);
};

const createMessageEl = (
  parent,
  id,
  text,
  sender,
  date,
  callback = () => {}
) => {
  const wrapper = c("div");
  const textPar = c("p");
  const senderPar = c("p");
  const dataPar = c("p");
  const deleteButton = c("button");
  const liked = c("i");
  const repeat = c("i");
  const profile = c("img");

  wrapper.className = "messageCard";
  wrapper.setAttribute("id", id);
  textPar.textContent = text;
  senderPar.textContent = sender;
  // dataPar.textContent = date.split("T")[0].split("-").reverse().join("-");
  deleteButton.textContent = "Elimina";
  deleteButton.className = "deleteButton";
  liked.innerHTML = `<i class="fa-solid fa-heart"></i>`;
  repeat.innerHTML = `<i class="fa-solid fa-repeat"></i>`;
  profile.className = "profileCardImg";
  profile.innerHTML = `<img src="https://picsum.photos/id/237/200/300?" alt="">`;

  deleteButton.addEventListener("click", callback);

  wrapper.append(
    textPar,
    senderPar,
    dataPar,
    profile,
    liked,
    repeat,
    deleteButton
  );
  parent.appendChild(wrapper);
};

export { c, q, createCard, createFriendEl, createMessageEl };
