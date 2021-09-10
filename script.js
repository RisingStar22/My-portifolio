const hamburger = document.querySelector("#hamburger");
const mobileMenu = document.querySelector("#mobile-links");
hamburger.addEventListener("click", () => {
  if (hamburger.classList.contains("open")) {
    hamburger.classList.remove("open");
    mobileMenu.classList.remove("active");
  } else {
    hamburger.classList.add("open");
    mobileMenu.classList.add("active");
  }
});
