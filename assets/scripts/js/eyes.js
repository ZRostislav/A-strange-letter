var LeftEyeTop = document.getElementById("left__eyе__top");
var LeftEyeBottom = document.getElementById("left__eye__bottom");
var RightEyeTop = document.getElementById("right__eye__top");
var RightEyeBottom = document.getElementById("right__eye__bottom");

function active__eyes() {
  LeftEyeTop.style.d = 'path("M 10 80 Q 190 250 390 80")';
  LeftEyeBottom.style.d = 'path("M 10 80 Q 190 -80 390 80")';
  RightEyeTop.style.d = 'path("M 10 80 Q 190 250 390 80")';
  RightEyeBottom.style.d = 'path("M 10 80 Q 190 -80 390 80")';
}

function repeatAnimation() {
  LeftEyeTop.style.animation = "";
  LeftEyeBottom.style.animation = "";
  RightEyeTop.style.animation = "";
  RightEyeBottom.style.animation = "";
  void LeftEyeTop.offsetWidth;
  void LeftEyeBottom.offsetWidth;
  void RightEyeTop.offsetWidth;
  void RightEyeBottom.offsetWidth;

  setTimeout(() => {
    LeftEyeTop.style.animation = "eyes__top 2s";
    LeftEyeBottom.style.animation = "eyes__bottom 2s";
    RightEyeTop.style.animation = "eyes__top 2s";
    RightEyeBottom.style.animation = "eyes__bottom 2s";
  }, 1000);

  console.log("lf");
}
