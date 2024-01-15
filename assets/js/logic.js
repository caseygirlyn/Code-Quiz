let btnStartScreen = document.querySelector('#start-screen');
let timerEl = document.querySelector('#time');
let questionEl = document.querySelector('#questions');
let questionTitle = document.querySelector('#question-title');
let choices = document.querySelector('#choices');
let feedback = document.querySelector('#feedback');
let finalScore = document.querySelector('#final-score');
let endScreen = document.querySelector('#end-screen');
let initialsEl = document.querySelector('#initials');
let submit = document.querySelector('#submit');
let errorMessage = document.querySelector('#errorMessage');
let correctWav = new Audio('./assets/sfx/correct.wav');
let incorrectWav = new Audio('./assets/sfx/incorrect.wav');

let countdown = 75;
let questionCounter = 0;
let totalScore = 0;
let correctAns;
let myTimer;

btnStartScreen.addEventListener('click', function (event) {
    event.preventDefault();
    myTimer = setInterval(startTimer, 1000);
    timerEl.textContent = countdown;
    questionEl.classList.remove('hide');
    btnStartScreen.classList.add('hide');
    loadQA();
});

function startTimer() {
    if (countdown > 0) {
        countdown--;
        // Display countdown timer on the screen
        timerEl.textContent = countdown;
    } else {
        timeIsUp()
    }
}

// Stop the countdown if time is up/ if all questions are aswered and display end screen with total score and input text to submit initials
function timeIsUp() {
    clearInterval(myTimer);
    questionEl.classList.add('hide');
    feedback.classList.add('hide');
    endScreen.classList.remove('hide');
    finalScore.innerHTML = totalScore;
}

// Check if answer is correct/wrong, increment total score if correct and load next q&a
function validateAnswer(userAnswer) {
    feedback.classList.remove('hide');
    correctAns = questions[questionCounter].correctAnswer;

    if (userAnswer === correctAns) {
        feedback.innerHTML = 'Correct!';
        correctWav.play();
        totalScore++;
    } else {
        feedback.innerHTML = 'Wrong!';
        incorrectWav.play();
        countdown -= 10;
    }
    questionCounter++
    setTimeout(function () {
        loadQA();
    }, 1000);
}

// Display each set of Q&As from questions array
function loadQA() {
    if (choices.hasChildNodes()) {
        choices.innerHTML = '';
    }
    if (questionCounter < questions.length) {
        feedback.innerHTML = '';
        feedback.classList.add('hide');

        let currentQuestion = questions[questionCounter];
        let question = currentQuestion.question;

        questionTitle.textContent = question;

        currentQuestion.choices.forEach(function (choice, i) {
            let buttonEl = document.createElement('button');
            buttonEl.textContent = i + 1 + '. ' + choice;
            buttonEl.setAttribute('onclick', `validateAnswer(${i})`);
            choices.appendChild(buttonEl);
        });

    } else if (questionCounter === questions.length) {
        timeIsUp()
    }
}

// Save user initials and score to local storage
submit.addEventListener('click', function (event) {
    event.preventDefault();
    let initial = initialsEl.value.trim();
    if (initial !== '') {
        let userScores = JSON.parse(window.localStorage.getItem('userScores')) || [];
        let newScore = { initial: initial, score: totalScore };
        userScores.push(newScore);
        window.localStorage.setItem('userScores', JSON.stringify(userScores));
        window.location.href = './highscores.html';
    }else{
        initialsEl.classList.add('invalid');
        errorMessage.classList.remove('hide');
    }
});
