const themeToggle = document.getElementById("theme-toggle");
var containerHUB = document.getElementsByClassName("container__hub");
var text = document.getElementsByClassName("text");
var question = document.getElementsByClassName("question");
var path = document.getElementsByClassName("path");
var musicProgress = document.getElementById("music__progress");
var musicProgressWebkit = document.getElementsByClassName(
  "music__progress::-webkit-slider-thumb"
);
var controlsAudio = document.getElementsByClassName(
  "controls__audio div:nth-child(2)"
);
var langObject = document.getElementsByClassName("lang__object");

// const favicon = document.getElementById("favicon");

// themeToggle.addEventListener("change", () => {
//   if (themeToggle.checked) {
//     document.body.classList.add("light-mode");
//     // favicon.href = "./assets/img/dark-icon.png"; // Замените на путь к иконке для темной темы
//   }
//   //   else {
//   //     document.body.classList.remove("light-mode");
//   //     // favicon.href = "./assets/img/light-icon.png"; // Замените на путь к иконке для светлой темы
//   //   }
// });

themeToggle.addEventListener("click", () => {
  document.body.classList.add("light-mode");
  containerHUB.classList.add("light-mode");
  text.classList.add("light-mode");
  question.classList.add("light-mode");
  path.classList.add("light-mode");
  musicProgress.classList.add("light-mode");
  musicProgressWebkit.classList.add("light-mode");
  controlsAudio.classList.add("light-mode");
  langObject.classList.add("light-mode");
});
