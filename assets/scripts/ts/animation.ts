// Начальные значения id
let currentId1 = 1;
let currentId2 = 2;

// Обработчик события нажатия на пробел
document.addEventListener("keydown", (event) => {
  // Проверяем, что нажата клавиша пробела (код клавиши 32)
  if (event.keyCode === 32) {
    // Формируем id элементов
    const id1 = String(currentId1);
    const id2 = String(currentId2);

    // Получаем ссылки на элементы по их id
    const myElement1 = document.getElementById(id1);
    const myElement2 = document.getElementById(id2);

    // Изменяем стили первого элемента
    if (myElement1) {
      myElement1.classList.remove("visible");
      myElement1.classList.add("hidden");
    }

    // Изменяем стили второго элемента
    if (myElement2) {
      myElement2.classList.remove("visible");
      myElement2.classList.add("hidden");
    }

    // Увеличиваем значения id для следующего использования
    currentId1++;
    currentId2++;
  }
});
