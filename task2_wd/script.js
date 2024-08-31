let timer;
let isRunning = false;
let milliseconds = 0, seconds = 0, minutes = 0, hours = 0;
let startButton = document.getElementById('start');
let pauseButton = document.getElementById('pause');
let resetButton = document.getElementById('reset');
let lapButton = document.getElementById('lap');
let lapList = document.getElementById('lapList');

function updateDisplay() {
    document.getElementById('milliseconds').textContent = formatTime(milliseconds);
    document.getElementById('seconds').textContent = formatTime(seconds);
    document.getElementById('minutes').textContent = formatTime(minutes);
    document.getElementById('hours').textContent = formatTime(hours);
}

function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

function startTimer() {
    if (!isRunning) {
        timer = setInterval(() => {
            milliseconds++;
            if (milliseconds >= 100) {
                milliseconds = 0;
                seconds++;
            }
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
            }
            if (minutes >= 60) {
                minutes = 0;
                hours++;
            }
            updateDisplay();
        }, 10);
        isRunning = true;
    }
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    milliseconds = seconds = minutes = hours = 0;
    updateDisplay();
    lapList.innerHTML = '';
}

function addLap() {
    if (isRunning) {
        let lapItem = document.createElement('li');
        lapItem.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(milliseconds)}`;
        lapList.appendChild(lapItem);
    }
}

startButton.addEventListener('click', startTimer);
pauseButton.addEventListener('click', pauseTimer);
resetButton.addEventListener('click', resetTimer);
lapButton.addEventListener('click', addLap);
