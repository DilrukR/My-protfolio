const nav = document.querySelector(".nav-container");
const ham = document.querySelector(".hamburger");
const hclose = document.querySelector(".ham-close");

ham.addEventListener("click", openNav);
hclose.addEventListener("click", closeNav);

function openNav() {
  nav.style.transform = "translateX(0)";
  ham.style.display = "none";
  hclose.style.display = "block";
}

function closeNav() {
  nav.style.transform = "translateX(70%)";
  ham.style.display = "block";
  hclose.style.display = "none";
}
