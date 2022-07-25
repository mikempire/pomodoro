let secondsInMs = 25 * 60;
const minutesEl = document.querySelector('.minutes');
const secondsEl = document.querySelector('.seconds');
const main = document.querySelector('.main');
const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const doneBtn = document.querySelector('.done');
const audio = document.querySelector('.audio');
let interval,
    disabled = true;


startBtn.addEventListener('click', function () {
    // if (doneBtn.innerText === 'пропустить') {
    //     secondsInMs = 25 * 60;
    //     main.innerText = 'работа';
    // }
    clearInterval(interval);
    interval = setInterval(function () {
        timerDown();
    }, 1000);

    pauseBtn.disabled = false;
    pauseBtn.classList.remove('disabled');
    doneBtn.disabled = false;
    doneBtn.classList.remove('disabled');


    startBtn.disabled = true;
    startBtn.classList.add('disabled');

})


pauseBtn.addEventListener('click', function () {
    clearInterval(interval);
    startBtn.disabled = false;
    startBtn.classList.remove('disabled');
})

doneBtn.addEventListener('click', function () {
    clearInterval(interval);
    audio.play();
    secondsInMs = 5*60;
    interval = setInterval(function () {
        timerDown();
    }, 1000);
    main.innerText = 'перерыв';
    doneBtn.innerText = 'пропустить';
    doneBtn.addEventListener('click', function () {
        if (doneBtn.innerText === 'пропустить') {
            location.reload();
        }
    })

})

function timerDown() {
    secondsInMs--;
    let minutes = Math.floor(secondsInMs / 60);
    let seconds = Math.floor(secondsInMs % 60);
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    if (seconds < 10) {
        seconds = `0${seconds}`;
    }

    minutesEl.innerText = minutes;
    secondsEl.innerText = seconds;


    if (minutes == 00 && seconds == 00) {
        audio.play();
        clearInterval(interval);
    }
}

function disabledBtn() {
    if (disabled) {
        pauseBtn.disabled = true;
        pauseBtn.classList.add('disabled');
        doneBtn.disabled = true;
        doneBtn.classList.add('disabled');
    }
}

disabledBtn();