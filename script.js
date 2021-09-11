const hamburger = document.querySelector("#hamburger");
const mobileMenu = document.querySelector("#mobile-links");
hamburger.addEventListener("click", () => {
  if (hamburger.classList.contains("open")) {
    document.body.style.overflow = "scroll";
    hamburger.classList.remove("open");
    mobileMenu.classList.remove("active");
  } else {
    document.body.style.overflow = "hidden";
    hamburger.classList.add("open");
    mobileMenu.classList.add("active");
  }
});
