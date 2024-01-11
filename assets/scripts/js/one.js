// Дождемся полной загрузки документа
document.addEventListener("DOMContentLoaded", function () {
  // Получаем ссылку на элемент с id "right__eye__top"
  var LeftEyeTop = document.getElementById("left__eyе__top");
  var LeftEyeBottom = document.getElementById("left__eye__bottom");
  var RightEyeTop = document.getElementById("right__eye__top");
  var RightEyeBottom = document.getElementById("right__eye__bottom");

  document.addEventListener("keydown", function (event) {
    // Проверяем, была ли нажата клавиша "w" или "ц"
    if (event.key === "w" || event.key === "ц") {
      // Добавляем стиль к элементу
      LeftEyeTop.style.d = 'path("M 10 80 Q 190 250 390 80")';
      LeftEyeBottom.style.d = 'path("M 10 80 Q 190 -80 390 80")';
      RightEyeTop.style.d = 'path("M 10 80 Q 190 250 390 80")';
      RightEyeBottom.style.d = 'path("M 10 80 Q 190 -80 390 80")';
    }
  });
});
