function quest13() {
  space.style.display = "none";
  canPressSpace = false;
  on__button__quest__2();

  quest2__1.addEventListener("click", function () {
    off__button__quest__2();

    var id1 = String(currentId1);
    var id2 = String(currentId2);
    var myElement1 = document.getElementById(id1);
    var myElement2 = document.getElementById(id2);

    myElement1.classList.remove("visible");
    myElement1.classList.add("hidden");

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

  quest2__2.addEventListener("click", function () {
    off__button__quest__2();

    var id1 = String(currentId1);
    var id2 = String(currentId2);
    var myElement1 = document.getElementById(id1);
    var myElement2 = document.getElementById(id2);

    myElement1.classList.remove("visible");
    myElement1.classList.add("hidden");

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
}
