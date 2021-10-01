const hamburger = document.querySelector(".hamburger");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("is-active");
    overlay.classList.toggle("active");
}
function openNav() {
  document.getElementById("myNav").style.display = "block";
}