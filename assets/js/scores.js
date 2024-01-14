let olEl = document.getElementById('highscores');
let scoresBtn = document.querySelector('#highscores');

// Display user initials and score from local storage
function displayScores() {
    let userScores = JSON.parse(window.localStorage.getItem('userScores')) || [];

    userScores.forEach(function(score) {
      let liEl = document.createElement('li');
      liEl.textContent = score.initial + ' - ' + score.score;
      olEl.appendChild(liEl);
    });
}

displayScores();