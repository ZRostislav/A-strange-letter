document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    toggleOverlay();
  }
});

function toggleOverlay() {
  var overlay = document.getElementById("overlay");
  var containerMusic = document.getElementById("container__music");
  var musicPlayer = document.getElementById("music__player");
  var containerLang = document.getElementById("container__lang");
  var overlayPause = document.getElementById("overlay__pause");
  var buttonQALL = document.getElementById("questionALL");

  if (
    overlay.style.display === "none" ||
    containerMusic.style.display === "none" ||
    musicPlayer.style.display === "none" ||
    containerLang.style.display === "none" ||
    overlayPause.style.display === "none"
  ) {
    overlay.style.display = "block";
    containerMusic.style.display = "block";
    musicPlayer.style.display = "block";
    containerLang.style.display = "block";
    overlayPause.style.display = "block";
    canPressSpace = false;
    buttonQALL.style.zIndex = "2";
  } else {
    overlay.style.display = "none";
    containerMusic.style.display = "none";
    musicPlayer.style.display = "none";
    containerLang.style.display = "none";
    overlayPause.style.display = "none";
    canPressSpace = true;
    buttonQALL.style.zIndex = "3";
  }
}
