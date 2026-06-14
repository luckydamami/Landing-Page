const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");
const navMenu = document.querySelector(".nav-menu");

menuOpenButton.addEventListener("click", (e) => {
  e.preventDefault();
  navMenu.classList.add("nav-menu--active");
  document.body.classList.add("menu-open");
});

menuCloseButton.addEventListener("click", () => {
  navMenu.classList.remove("nav-menu--active");
  document.body.classList.remove("menu-open");
});

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("nav-menu--active");
    document.body.classList.remove("menu-open");
  });
});
