function sendMessage() {
  var userInput = document.getElementById("messageInput");
  var messageBox = document.getElementById("message-box");

  // Получаем текст из поля ввода
  var messageText = userInput.value;

  if (messageText.trim() !== "") {
    // Заменяем текст в элементе <p>
    messageBox.innerText = messageText;

    // Очищаем поле ввода
    userInput.value = "";
  }
}
