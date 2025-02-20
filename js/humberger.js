const menu = document.querySelector(".menu");
const button = document.querySelector(".button");
const overlay = document.querySelector(".overlay");
const body = document.body;

const toggleMenu = () => {
  menu.classList.toggle("menuIsOpen");
  overlay.classList.toggle("overlayIsOpen");
  button.classList.toggle("buttonIsOpen");
  body.classList.toggle("IsScrollAllowed");
};

button.addEventListener("click", () => {
  toggleMenu();
});

overlay.addEventListener("click", () => {
  toggleMenu();
});
