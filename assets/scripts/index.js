const hamburgerBtn = document.getElementById("hamburgerButton");
const navMenu = document.getElementById("navMenu");

hamburgerBtn.addEventListener("click", () => {
  navMenu.classList.toggle("show");
});
