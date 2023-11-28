import state from "./state.js";
import * as timer from "./timer.js";
import * as el from "./elements.js";
import * as sound from "./sounds.js";

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");

  timer.countdown();
  sound.buttonPressAudio.play();
}

export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");
  timer.updateDisplay();
  sound.buttonPressAudio.play();
}

export function toggleMusic() {
  state.isMute = document.documentElement.classList.toggle("music-on");
  if (state.isMute) {
    sound.bgAudio.play();
    return;
  }

  sound.bgAudio.pause();
}

export function set() {
  el.minutes.setAttribute("contenteditable", true);
  el.minutes.focus();
}
