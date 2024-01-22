var langOrder = ["ru", "en", "ua", "ro"];
var currentLangIndex = 0;

function changeLanguage() {
  var lang = langOrder[currentLangIndex];
  setLang(lang);

  // Увеличиваем индекс текущего языка с учетом кругового порядка
  currentLangIndex = (currentLangIndex + 1) % langOrder.length;
}

var txt = {};

function setLang(lang) {
  var p;
  if (!txt.hasOwnProperty(lang)) return;
  if (window.hasOwnProperty("localStorage")) {
    window.localStorage.setItem("lang", lang);
  }
  for (p in txt[lang]) {
    document.getElementById(p).innerText = txt[lang][p];
  }
}

var lang =
  (window.hasOwnProperty("localStorage") &&
    window.localStorage.getItem("lang", lang)) ||
  "ru";
setLang(lang);

var txt = {
  ru: {
    100001: "RU",
    1: "Привет?",
    2: "Ты Помнишь Меня?",
    3: "Неважно...",
    4: "Я очень очень устал...",
    5: "Можно взглянуть на тебя?",
    6: "Ты изменился...",
    7: "Будь по твоему...",
    8: "Взгляни на меня!",

    whitespaceID: "Нажмите пробел что бы продолжить...",

    question__2__1: "Да",
    question__2__2: "Нет",
    question__5__1: "Да",
    question__5__2: "Нет",
  },
  en: {
    100001: "EN",
    1: "Hello?",
    2: "Ты Помнишь Меня?",
    3: "Неважно...",
    4: "Я очень очень устал...",
    5: "Можно взглянуть на тебя?",
    6: "Ты изменился...",
    7: "Будь по твоему...",
    8: "Взгляни на меня!",

    whitespaceID: "Нажмите пробел что бы продолжить...",

    question__2__1: "Да",
    question__2__2: "Нет",
    question__5__1: "Да",
    question__5__2: "Нет",
  },
  ua: {
    100001: "UA",
    1: "Привiт?",
    2: "Ты Помнишь Меня?",
    3: "Неважно...",
    4: "Я очень очень устал...",
    5: "Можно взглянуть на тебя?",
    6: "Ты изменился...",
    7: "Будь по твоему...",
    8: "Взгляни на меня!",

    whitespaceID: "Нажмите пробел что бы продолжить...",

    question__2__1: "Да",
    question__2__2: "Нет",
    question__5__1: "Да",
    question__5__2: "Нет",
  },
  ro: {
    100001: "RO",
    1: "Buna ziua?",
    2: "Ты Помнишь Меня?",
    3: "Неважно...",
    4: "Я очень очень устал...",
    5: "Можно взглянуть на тебя?",
    6: "Ты изменился...",
    7: "Будь по твоему...",
    8: "Взгляни на меня!",

    whitespaceID: "Нажмите пробел что бы продолжить...",

    question__2__1: "Да",
    question__2__2: "Нет",
    question__5__1: "Да",
    question__5__2: "Нет",
  },
};

document
  .getElementById("100002")
  .addEventListener("click", setLang.bind(null, "en"));
document
  .getElementById("100003")
  .addEventListener("click", setLang.bind(null, "ua"));
document
  .getElementById("100001")
  .addEventListener("click", setLang.bind(null, "ru"));
document
  .getElementById("100004")
  .addEventListener("click", setLang.bind(null, "ro"));

function setLang(lang) {
  var p;
  if (!txt.hasOwnProperty(lang)) return;
  if (window.hasOwnProperty("localStorage"))
    window.localStorage.setItem("lang", lang);
  for (p in txt[lang]) {
    document.getElementById(p).innerText = txt[lang][p];
  }
}

var lang =
  (window.hasOwnProperty("localStorage") &&
    window.localStorage.getItem("lang", lang)) ||
  "ru";
setLang(lang);
