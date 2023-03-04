// https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode/BiquadFilterNode

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();

const audioElement = document.querySelector("audio");
audioElement.crossOrigin = "anonymous";

// let audioStream = new MediaStream(audioElement);
const source = audioCtx.createMediaElementSource(audioElement);

const osc = audioCtx.createOscillator();
osc.type = 'sawtooth';

const filter = audioCtx.createBiquadFilter();
filter.frequency.value = 800;

source.connect(filter);
filter.connect(audioCtx.destination);




function ctxResume(){
    console.log('resume')
    // osc.start(0);
    audioCtx.resume();
    // osc.stop(2);
}






// fetch(audioElement).then(data => data.arrayBuffer).then(arrayBuffer => audioCtx.decodeAudioData(arrayBuffer)).then(decodedAudio => {audio = decodedAudio});





// let audioStream = new MediaStream(audioElement) 

// let source = audioCtx.createMediaStreamSource(audioStream)

// let gainNode = audioCtx.createGain();



// source.connect(gainNode)
// gainNode.connect(audioCtx.destination);


