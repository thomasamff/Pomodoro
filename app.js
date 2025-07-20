const bells = new Audio('./sounds/bell.wav');
const startBtn = document.querySelector('.btn-start');
const resetBtn = document.querySelector('.btn-reset');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');

const ogMinutes = minutes.textContent;
const ogSeconds = seconds.textContent;

let myInterval;
let state = true;
let sessionAmount;

const appTime = () => {
    minutes = document.querySelector('.minutes');
    seconds = document.querySelector('.seconds');

    if (state) {
        sessionAmount = Number.parseInt(minutes.textContent) * 60 + Number.parseInt(seconds.textContent);
        state = false;
        startBtn.textContent = "Pause";
        myInterval = setInterval(updateSeconds, 1000);
    } else {
        state = true;
        startBtn.textContent = "Start";
        clearInterval(myInterval);
        myInterval = null;

    }

};

const updateSeconds = () => {
    sessionAmount--;

    let minutesLeft = Math.floor(sessionAmount/60);
    let secondsLeft = Math.floor(sessionAmount%60);

    seconds.textContent = secondsLeft < 10 ? '0' + secondsLeft : secondsLeft;
    minutes.textContent = `${minutesLeft}`;

    if (minutesLeft === 0 && secondsLeft === 0) {
        clearInterval(myInterval);
    }
};

const resetTime = () => {
    if (!state) {
        state = true;
        clearInterval(myInterval);
        myInterval = null;
        startBtn.textContent = "Start";
    } 
    minutes.textContent = ogMinutes;
    seconds.textContent = ogSeconds;
    
};


startBtn.addEventListener('click', appTime);
resetBtn.addEventListener('click', resetTime);