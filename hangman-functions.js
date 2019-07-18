//Rendering the game to the dom
const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const game1 = new Hangman('cat', 3);

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage;

//Listen every key word press from de user
window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    puzzleEl.textContent = game1.puzzle;
    guessesEl.textContent = game1.statusMessage;

});

