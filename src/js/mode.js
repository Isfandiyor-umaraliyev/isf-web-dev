// let dark = document.querySelector(".header__dark-mode");
// let light = document.querySelector(".header__light-mode");
// dark.addEventListener("click", () => {
//   light.classList.toggle("hidden");
//   dark.classList.toggle("hidden");
//   document.body.classList.add("dark-mode");
// });
// light.addEventListener("click", () => {
//   light.classList.toggle("hidden");
//   dark.classList.toggle("hidden");
//   document.body.classList.remove("dark-mode");
// });

const body = document.querySelector("body");
const darkBtn = document.querySelector(".header__dark-mode");
const lightBtn = document.querySelector(".header__light-mode");
const modeLocal = localStorage.getItem("mode");
if (modeLocal) {
  body.classList.add("dark-mode");
  darkBtn.classList.toggle("hidden");
  lightBtn.classList.toggle("hidden");
}
const toggleModeBtn = () => {
  darkBtn.classList.toggle("hidden");
  lightBtn.classList.toggle("hidden");
  body.classList.toggle("dark-mode");
};

darkBtn.addEventListener("click", () => {
  toggleModeBtn();
  localStorage.setItem("mode", "dark-mode");
});

lightBtn.addEventListener("click", () => {
  toggleModeBtn();
  localStorage.setItem("mode", "");
});
