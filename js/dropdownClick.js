const menu = document.getElementsByClassName("menu-title");

function toggle(event) {
  // event.preventDefault();
  const content = this.nextElementSibling;
  content.classList.toggle("is-open");
}

for (let i = 0; i < menu.length; i++) {
  menu[i].addEventListener("click", toggle);
}
