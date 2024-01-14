let btnStartScreen = document.querySelector('#start-screen');
let timerEl = document.querySelector('#time');
let questionEl = document.querySelector('#questions');
let questionTitle = document.querySelector('#question-title');
let option1 = document.querySelector('#option1');
let option2 = document.querySelector('#option2');
let option3 = document.querySelector('#option3');
let option4 = document.querySelector('#option4');

let counter = 75;
let questionCounter = 0;

btnStartScreen.addEventListener('click', function (event) {
    event.preventDefault();
    timerEl.textContent = counter;
    questionEl.removeAttribute('class','hide');
    btnStartScreen.setAttribute('class','hide');
    loadQuestion();
    setInterval(function () {
        if (counter > 0) {
            counter--;
            // Display countdown timer on the screen
            timerEl.textContent = counter;
        } else {
            return;
        }
    }, 1000);

});


function loadQuestion(){
    let question = questions[questionCounter].question;
    let ans1 = questions[questionCounter].option1;
    let ans2 = questions[questionCounter].option2;
    let ans3 = questions[questionCounter].option3;
    let ans4 = questions[questionCounter].option4;

    questionTitle.textContent = question;
    option1.textContent = ans1;
    option2.textContent = ans2;
    option3.textContent = ans3;
    option4.textContent = ans4;
    questionCounter++;

}