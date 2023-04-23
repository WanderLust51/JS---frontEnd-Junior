// https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode/BiquadFilterNode

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();


const audioElement = document.querySelector("audio");
audioElement.crossOrigin = "anonymous";

// let audioStream = new MediaStream(audioElement);
const source = audioCtx.createMediaElementSource(audioElement);

const osc = audioCtx.createOscillator();
osc.type = 'sawtooth';

const filter = audioCtx.createBiquadFilter();
filter.frequency.value = 260;

const gainNode = audioCtx.createGain();
defaultGain = 0.35;
lowGain = 0.25;
gainNode.gain.value = defaultGain;




function ctxResume(){
    if (audioCtx.state == 'suspended'){
        console.log('resume');
        audioCtx.resume();
    }else{
        console.log('Already resumed');
    }
    // osc.start(0);
    // osc.stop(10);

    source.connect(filter);
    filter.connect(gainNode);
    gainNode.connect(audioCtx.destination)
}

function highEnergy(){
    var i = 320;
    gainNode.gain.value = lowGain;

    filter.frequency.exponentialRampToValueAtTime(20000, source.context.currentTime + 0.1)
    // filter.frequency.value = 20000;
    // console.log('Hype');
}


function lowEnergy(){
    var i = 20000;
    gainNode.gain.value = defaultGain;


    filter.frequency.value = 20000;
    filter.frequency.exponentialRampToValueAtTime(320, source.context.currentTime + 0.1)
    
    // filter.frequency.value = 320;
    // console.log('Low');
}

function frequencyRampStop(){
    filter.frequency.cancelScheduledValues();
}



