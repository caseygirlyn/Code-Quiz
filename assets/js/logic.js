let btnStartScreen = document.querySelector('#start-screen');
let timerEl = document.querySelector('#time');
let questionEl = document.querySelector('#questions');
let questionTitle = document.querySelector('#question-title');
let choices = document.querySelector('#choices');
let feedback = document.querySelector('#feedback');
let btnchoice = document.querySelector('button');
let finalScore = document.querySelector('#final-score');
let endScreen = document.querySelector('#end-screen');

let countdown = 75;
let questionCounter = 0;
let correctAns = '';
let totalScore = 0;
var myTimer;

btnStartScreen.addEventListener('click', function (event) {
    event.preventDefault()
    timerEl.textContent = countdown;
    questionEl.classList.remove('hide');;
    btnStartScreen.classList.add('hide');
    loadQA();
    myTimer = startTimer();
});

function startTimer() {
    setInterval(function () {
        if (countdown > 0) {
            countdown--;
            // Display countdown timer on the screen
            timerEl.textContent = countdown;
        } else {
            timeIsUp()
        }
    }, 1000);
}

function timeIsUp() {
    clearInterval(myTimer);
    questionEl.classList.add('hide');
    endScreen.classList.remove('hide');
    feedback.classList.add('hide');
    finalScore.innerHTML = totalScore;
}

function validateAnswer(userAnswer) {
    feedback.classList.remove('hide');
    correctAns = questions[questionCounter - 1].correctAnswer;

    if (userAnswer === correctAns) {
        feedback.innerHTML = "Correct!";
        totalScore++;
    } else {
        feedback.innerHTML = "Wrong!";
    }
    setTimeout(function () {
        loadQA();
    }, 1000);
}

function loadQA() {
    if (choices.hasChildNodes()) {
        choices.innerHTML = '';
    }
    if (questionCounter < questions.length) {
        feedback.innerHTML = '';
        feedback.classList.add('hide');
        let question = questions[questionCounter].question;
        let choice1 = questions[questionCounter].choice1;
        let choice2 = questions[questionCounter].choice2;
        let choice3 = questions[questionCounter].choice3;
        let choice4 = questions[questionCounter].choice4;

        questionTitle.textContent = question;

        questionCounter++;

        let buttonEl1 = document.createElement('button');
        buttonEl1.setAttribute('onclick', 'validateAnswer(1)');

        let buttonEl2 = document.createElement('button');
        buttonEl2.setAttribute('onclick', 'validateAnswer(2)');

        let buttonEl3 = document.createElement('button');
        buttonEl3.setAttribute('onclick', 'validateAnswer(3)');

        let buttonEl4 = document.createElement('button');
        buttonEl4.setAttribute('onclick', 'validateAnswer(4)');

        buttonEl1.textContent = '1. ' + choice1;
        buttonEl2.textContent = '2. ' + choice2;
        buttonEl3.textContent = '3. ' + choice3;
        buttonEl4.textContent = '4. ' + choice4;

        choices.appendChild(buttonEl1);
        choices.appendChild(buttonEl2);
        choices.appendChild(buttonEl3);
        choices.appendChild(buttonEl4);

    } else if (questionCounter === questions.length) {
        timeIsUp()
    }

}