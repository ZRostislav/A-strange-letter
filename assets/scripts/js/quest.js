function on__button__quest__2() {
  setTimeout(() => {
    quest2__1.classList.remove("hiddenB");
    quest2__2.classList.remove("hiddenB");
    quest2__1.classList.add("visibleB");
    quest2__2.classList.add("visibleB");
  }, 4000);
}

function off__button__quest__2() {
  quest2__1.classList.remove("visibleB");
  quest2__2.classList.remove("visibleB");
  quest2__1.classList.add("hiddenB");
  quest2__2.classList.add("hiddenB");
}

function on__button__quest__5() {
  setTimeout(() => {
    quest5__1.classList.remove("hiddenB");
    quest5__2.classList.remove("hiddenB");
    quest5__1.classList.add("visibleB");
    quest5__2.classList.add("visibleB");
  }, 4000);
}

function off__button__quest__5() {
  quest5__1.classList.remove("visibleB");
  quest5__2.classList.remove("visibleB");
  quest5__1.classList.add("hiddenB");
  quest5__2.classList.add("hiddenB");
}
