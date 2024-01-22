function quest5() {
  space.style.display = "none";
  canPressSpace = false;
  on__button__quest__5();

  quest5__1.addEventListener("click", function () {
    off__button__quest__5();

    var id1 = String(currentId1);
    var id2 = String(currentId2);
    var myElement1 = document.getElementById(id1);
    var myElement2 = document.getElementById(id2);

    myElement1.classList.remove("visible");
    myElement1.classList.add("hidden");
    currentId1 = 8;
    currentId2 = 9;
    id1 = String(currentId1);
    id2 = String(currentId2);
    myElement1 = document.getElementById(id1);
    myElement2 = document.getElementById(id2);

    setTimeout(() => {
      myElement2.classList.remove("hidden");
      myElement2.classList.add("visible");
      isAnimating = false; // Сбрасываем флаг после завершения анимации
    }, 2000);
    canPressSpace = true;
    setTimeout(() => {
      space.style.display = "";
    }, 5000);
    return;
  });

  quest5__2.addEventListener("click", function () {
    off__button__quest__5();

    var quest5 = document.getElementById(5);

    quest5.classList.remove("visible");
    quest5.classList.add("hidden");
    currentId1++;
    currentId2++;
    id1 = String(currentId1);
    id2 = String(currentId2);
    myElement1 = document.getElementById(id1);
    myElement2 = document.getElementById(id2);

    setTimeout(() => {
      myElement2.classList.remove("hidden");
      myElement2.classList.add("visible");
      isAnimating = false; // Сбрасываем флаг после завершения анимации
      canPressSpace = true;
      setTimeout(() => {
        space.style.display = "";
        //
        var eyes_full = document.querySelector(".container__eyes");
        eyes_full.style.opacity = 1;
        setTimeout(() => {
          active__eyes();
        }, 2000);
        setInterval(() => {
          repeatAnimation();
        }, 15000);
        //
      }, 5000);
      return;
    }, 2000);
  });
}
