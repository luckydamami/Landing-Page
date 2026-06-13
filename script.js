const mobileOpenButton = document.querySelector("#menu-open-button");
const mobileCloseButton = document.querySelector("#menu-close-button");

mobileOpenButton.addEventListener("click", () => {
  document.body.classList.toggle("show-mobile-menu");
});
