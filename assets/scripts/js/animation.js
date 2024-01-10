var currentId1 = 1;
var currentId2 = 2;
var isAnimating = false; // Флаг для отслеживания состояния анимации
var canPressSpace = true; // Флаг, разрешающий или запрещающий нажатие пробела

var space = document.getElementById("whitespaceID");

var quest2__1 = document.getElementById("question__2__1");
var quest2__2 = document.getElementById("question__2__2");

var quest5__1 = document.getElementById("question__5__1");
var quest5__2 = document.getElementById("question__5__2");

document.addEventListener("keydown", function (event) {
  // Проверяем, что нажата клавиша пробела (код клавиши 32) и не выполняется анимация
  if (event.keyCode === 32 && !isAnimating && canPressSpace) {
    isAnimating = true; // Устанавливаем флаг в состояние анимации
    canPressSpace = true;

    var id1 = String(currentId1);
    var id2 = String(currentId2);
    var myElement1 = document.getElementById(id1);
    var myElement2 = document.getElementById(id2);

    if (currentId2 === 2) {
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

    if (currentId2 === 5) {
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
          }, 5000);
          return;
        }, 2000);
      });
    }

    // Добавим дополнительные проверки на существование элементов
    if (myElement1) {
      myElement1.classList.remove("visible");
      myElement1.classList.add("hidden");
    }

    setTimeout(() => {
      if (myElement2) {
        myElement2.classList.remove("hidden");
        myElement2.classList.add("visible");
      }
      isAnimating = false; // Сбрасываем флаг после завершения анимации
    }, 2000);
    currentId1++;
    currentId2++;
  }
});
