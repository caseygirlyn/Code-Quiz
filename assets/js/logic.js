let btnStart = document.querySelector('#start-screen');
let timerEl = document.querySelector('#time');

let counter = 75;

btnStart.addEventListener('click', function (event) {
    timerEl.textContent = counter;
    setInterval(function () {
        if (counter > 0) {
            counter--;
            timerEl.textContent = counter;
        } else {
            return;
        }
    }, 1000);

});