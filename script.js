const videoEl = document.getElementById('video');
const buttonEl = document.getElementById('button');

// prompt user for media stream, then play in video elem
async function selectMediaStream() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoEl.srcObject = mediaStream;
    videoEl.onloadedmetadata = () => {
      videoEl.play();
    }
  } catch (error) {
    console.error(error);
  }
}

buttonEl.addEventListener('click', async () => {
  try {
    buttonEl.disabled = true;
    await videoEl.requestPictureInPicture();
    buttonEl.disabled = false;
  } catch (error) {
    console.error(error);
  }
});

selectMediaStream();
