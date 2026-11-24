let enabled = true;
let context;

function getContext() {
  if (!context) context = new (window.AudioContext || window.webkitAudioContext)();
  return context;
}

function note(frequency, start, duration, type = 'square', volume = 0.035) {
  if (!enabled) return;
  const audio = getContext();
  const oscillator = audio.createOscillator();
  const gain = audio.createGain();
  oscillator.type = type;
  oscillator.frequency.setValueAtTime(frequency, start);
  gain.gain.setValueAtTime(volume, start);
  gain.gain.exponentialRampToValueAtTime(0.001, start + duration);
  oscillator.connect(gain).connect(audio.destination);
  oscillator.start(start);
  oscillator.stop(start + duration);
}

export function playClick() {
  if (!enabled) return;
  const now = getContext().currentTime;
  note(520, now, 0.07);
  note(780, now + 0.075, 0.09);
}

export function playSuccess() {
  if (!enabled) return;
  const now = getContext().currentTime;
  [523, 659, 784, 1046].forEach((frequency, index) => note(frequency, now + index * 0.09, 0.13, 'triangle', 0.045));
}

export function toggleSound() {
  enabled = !enabled;
  return enabled;
}

export function soundIsEnabled() { return enabled; }
