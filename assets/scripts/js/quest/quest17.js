function quest17() {
  space.style.display = "none";
  canPressSpace = false;
  on__button__quest__17();

  quest17__1.addEventListener("click", function () {
    off__button__quest__17();

    // var id1 = String(currentId1);
    // var id2 = String(currentId2);
    // var myElement1 = document.getElementById(id1);
    // var myElement2 = document.getElementById(id2);

    var id17 = document.getElementById(17);
    var userB = document.getElementById("ChatMessageButton");
    var user = document.getElementById("ChatMessageInput");

    id17.classList.add("visibleS");
    userB.classList.remove("hiddenB");
    userB.classList.add("visibleB");
    user.classList.remove("hiddenB");
    user.classList.add("visibleB");

    myElement1.classList.remove("visible");
    myElement1.classList.add("hidden");

    setTimeout(() => {
      myElement2.classList.remove("hidden");
      myElement2.classList.add("visible");
      isAnimating = false; // Сбрасываем флаг после завершения анимации
    }, 2000);
    canPressSpace = false;
    setTimeout(() => {
      space.style.display = "";
    }, 5000);
    return;
  });

  quest17__2.addEventListener("click", function () {
    off__button__quest__17();

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
