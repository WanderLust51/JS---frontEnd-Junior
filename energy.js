// https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode/BiquadFilterNode

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

const audioElement = document.querySelector("audio");
audioElement.crossOrigin = "anonymous";

// let audioStream = new MediaStream(audioElement);
const source = audioCtx.createMediaElementSource(audioElement);

const osc = audioCtx.createOscillator();
osc.type = 'sawtooth';

const filter = audioCtx.createBiquadFilter();
filter.frequency.value = 400;

osc.connect(filter);
filter.connect(audioCtx.destination);


function ctxResume(){
    console.log('resume')
    audioCtx.resume();
    // osc.start(0);
    // osc.stop(10);
}

function highEnergy(){
    var i = 400;
    for (i=400; i <= 20000; i += 40){filter.frequency.value = i; console.log(i)}
    
    filter.frequency.value = 20000;
    console.log('Hype');
}
function lowEnergy(){
    var i = 20000;
    for (i=20000; i >= 400; i -= 40){filter.frequency.value = i}
    
    filter.frequency.value = 400;
    console.log('Low');
}



