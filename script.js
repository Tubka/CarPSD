const btn = document.querySelector(".nav__btn");
const menu = document.querySelector(".navigation");

const showMenu = () => {
  menu.classList.toggle("navigation__show");
};

btn.addEventListener("click", showMenu);
