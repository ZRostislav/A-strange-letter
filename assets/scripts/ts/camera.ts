document.addEventListener("DOMContentLoaded", () => {
  const startCameraButton = document.getElementById(
    "start-camera"
  ) as HTMLButtonElement;
  const cameraStream = document.getElementById(
    "camera-stream"
  ) as HTMLVideoElement;

  startCameraButton.addEventListener("click", async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      cameraStream.srcObject = stream;
    } catch (error) {
      console.error("Ошибка при получении доступа к камере:", error);
    }
  });
});
