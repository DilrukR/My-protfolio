const nav = document.querySelector(".nav-container");
const ham = document.querySelector(".hamburger");
const hclose = document.querySelector(".ham-close");
const a = document.querySelector("a");

ham.addEventListener("click", openNav);
hclose.addEventListener("click", closeNav);
a.addEventListener("click", activeClass);

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

function activeClass() {
  a.classList.add("active");
}
// for the navbar scroll effect

const header = document.querySelector("header");
const sectionOne = document.querySelector(".hero");
const sectionTwo = document.querySelector(".contact");

const secionOneOptions = {
  rootMargin: "-400px 0px 0px 0px",
};

const sectionObserver = new IntersectionObserver(function (
  entries,
  sectionObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      header.classList.remove("header-active");
    } else {
      header.classList.add("header-active");

      console.log(entry.target);
    }
  });
},
secionOneOptions);

sectionObserver.observe(header);
sectionObserver.observe(sectionOne);
sectionObserver.observe(sectionTwo);
