// https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode/BiquadFilterNode

let audioCtx;

const audioElement = document.querySelector("audio");

const gainNode = new GainNode(audioCtx);

const biquadFilter = audioCtx.createBiquadFilter();

biquadFilter.type = "lowshelf";
biquadFilter.frequency.value = 0.9;
biquadFilter.gain.value = 25;