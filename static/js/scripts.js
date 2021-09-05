// Snippet for the menu display
const menu = document.querySelector(".navbar-burger");
const showMenu = document.querySelector(".navbar-menu");

menu.addEventListener("click", () => {
  menu.classList.toggle("is-active");
  showMenu.classList.toggle("is-active");
});

// Snippet to close all notifications
const notificationClose = document.querySelectorAll(".notification button.delete");

notificationClose.forEach((notice) => {
  notice.addEventListener("click", () => notice.parentElement.remove();
});
