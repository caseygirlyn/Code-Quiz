let olEl = document.getElementById('highscores');
let scoresBtn = document.querySelector('#highscores');
let clearBtn = document.querySelector('#clear');

// Display user initials and score from local storage
function displayScores() {
    let userScores = JSON.parse(window.localStorage.getItem('userScores')) || [];

    // W3Schools array sort() method
    userScores.sort(function (a, b) {
        return b.score - a.score;
    });

    userScores.forEach(function (score) {
        let liEl = document.createElement('li');
        liEl.textContent = score.initial + ' - ' + score.score;
        olEl.appendChild(liEl);
    });

}

displayScores();

// Clear scores from local storage when user click clear button and reload the page
clearBtn.addEventListener('click', function (event) {
    window.localStorage.removeItem('userScores');
    window.location.reload();
});