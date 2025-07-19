// audioControl.js
let audio = new Audio("audio/thousandyears.mp3");
audio.loop = true;

// Restore play state from localStorage
window.addEventListener("DOMContentLoaded", () => {
  const shouldPlay = localStorage.getItem("audioShouldPlay");
  if (shouldPlay === "true") {
    audio.play().catch(() => {
      console.log("Autoplay blocked. Will play on user interaction.");
    });
  }
});

function playAudioAndRedirect(url) {
  localStorage.setItem("audioShouldPlay", "true");
  audio.play().then(() => {
    window.location.href = url;
  }).catch(() => {
    // In case autoplay is blocked, redirect anyway
    window.location.href = url;
  });
}

function toggleAudio(button) {
  if (audio.paused) {
    audio.play();
    button.textContent = "⏸️";
    localStorage.setItem("audioShouldPlay", "true");
  } else {
    audio.pause();
    button.textContent = "▶️";
    localStorage.setItem("audioShouldPlay", "false");
  }
}
