// https://developer.mozilla.org/en-US/docs/Web/API/BiquadFilterNode/BiquadFilterNode

const audioCtx = new (window.AudioContext || window.webkitAudioContext)();


let audioElement = document.querySelector("audio");
audioElement.crossOrigin = "anonymous";

// let audioStream = new MediaStream(audioElement);
let source = audioCtx.createMediaElementSource(audioElement);

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

    if (filter.frequency.value != 320){
        filter.frequency.cancelAndHoldAtTime(source.context.currentTime);
    }
    filter.frequency.exponentialRampToValueAtTime(20000, source.context.currentTime + 1)
}


function lowEnergy(){
    var i = 20000;
    gainNode.gain.value = defaultGain;

    if (filter.frequency.value != 20000){
        filter.frequency.cancelAndHoldAtTime(source.context.currentTime);
    }
    filter.frequency.exponentialRampToValueAtTime(320, source.context.currentTime + 0.2)
    // console.log(filter.frequency.value)
}

function frequencyRampStop(){
    filter.frequency.cancelScheduledValues();
}



