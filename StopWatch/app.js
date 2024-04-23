const display = document.getElementById('display');
let timer = null;
let startTimer = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
        startTimer = Date.now() - elapsedTime;
        timer = setInterval(update, 10)
        isRunning = true
    }
}
function sotp() {

    if (isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTimer;
        isRunning = false;
    }
}
function reset() {

    clearInterval(timer)
    startTimer = 0;
    elapsedTime = 0;
    isRunning = false;
    display.textContent = "00:00:00:00"
}

function update() {

    const currentTime = Date.now();
    elapsedTime = currentTime - startTimer;
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let menutes = Math.floor(elapsedTime / (100 * 60) % 60);
    let second = Math.floor(elapsedTime / 1000 % 60);
    let miliSecond = Math.floor(elapsedTime % 1000 / 10);


    hours = String(hours).padStart(2, '0')
    menutes = String(menutes).padStart(2, '0')
    second = String(second).padStart(2, '0')
    miliSecond = String(miliSecond).padStart(2, '0')




    display.textContent = `${hours} : ${menutes}: ${second} : ${miliSecond}`
}