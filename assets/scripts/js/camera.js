document.addEventListener("DOMContentLoaded", function () {
  var startCameraButton = document.getElementById("start-camera");
  var cameraStream = document.getElementById("camera-stream");

  startCameraButton.addEventListener("click", function () {
    navigator.mediaDevices
      .getUserMedia({ video: true })
      .then(function (stream) {
        cameraStream.srcObject = stream;
      })
      .catch(function (error) {
        console.error("Ошибка при получении доступа к камере:", error);
      });
  });
});
