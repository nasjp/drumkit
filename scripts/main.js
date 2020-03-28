const playSound = code => {
  const audio = document.querySelector(`audio[data-key="${code}"]`);
  if (!audio) return;
  const key = document.querySelector(`kbd[data-key="${code}"]`);

  key.classList.add("playing");
  audio.currentTime = 0;
  audio.play();
  setTimeout(() => {
    key.classList.remove("playing");
  }, 100);
};

const playSoundOnClicked = e => {
  playSound(e.target.dataset.key);
};

const playSoundOnTapped = e => {
  playSound(e.keyCode);
};

const keys = Array.from(document.querySelectorAll(".key"));
keys.forEach(e => e.addEventListener("click", playSoundOnClicked));
window.addEventListener("keydown", playSoundOnTapped);
