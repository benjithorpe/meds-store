const menu = document.querySelector(".navbar-burger");
const showMenu = document.querySelector(".navbar-menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("is-active");
  showMenu.classList.toggle("is-active");
});
