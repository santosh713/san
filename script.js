const hamburger = document.querySelector(".hamburger");
const navList = document.querySelector(".navbar");
const navLink = document.querySelector(".navlist");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  navList.classList.toggle("active");
  navLink.classList.toggle("active");
}
