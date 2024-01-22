var currentId1 = 12;
var currentId2 = 13;
var isAnimating = false; // Флаг для отслеживания состояния анимации
var canPressSpace = true; // Флаг, разрешающий или запрещающий нажатие пробела

var space = document.getElementById("whitespaceID");

var quest2__1 = document.getElementById("question__2__1");
var quest2__2 = document.getElementById("question__2__2");

var quest5__1 = document.getElementById("question__5__1");
var quest5__2 = document.getElementById("question__5__2");

var quest13__1 = document.getElementById("question__13__1");
var quest13__2 = document.getElementById("question__13__2");

var quest17__1 = document.getElementById("question__17__1");
var quest17__2 = document.getElementById("question__17__2");

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
      quest2();
    }

    if (currentId2 === 5) {
      quest5();
    }

    if (currentId2 === 14) {
      quest13();
    }

    if (currentId2 === 18) {
      quest17();
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
