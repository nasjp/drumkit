function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  if (!audio) return;
  const key = document.querySelector(`div[data-key="${e.keyCode}"]`);

  key.classList.add('playing');
  audio.currentTime = 0;
  audio.play();
  setTimeout(() => {
    key.classList.remove('playing');
  }, 100);
}

const keys = Array.from(document.querySelectorAll('.key'));
window.addEventListener('keydown', playSound);
