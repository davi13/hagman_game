//Rendering the game to the dom
const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const game1 = new Hangman('cat', 3);

puzzleEl.textContent = game1.puzzle
guessesEl.textContent = game1.statusMessage;

//Listen every key word press from de user
window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    puzzleEl.textContent = game1.puzzle;
    guessesEl.textContent = game1.statusMessage;

});
const request = new XMLHttpRequest();
request.addEventListener('readystatechange', (e) => {
    if (e.target.readyState === 4 && e.target.status === 200) {
        const data = JSON.parse(e.target.responseText);
        console.log(data);
    } else if (e.target.readyState === 4) {
        console.log('An error has taken place');
    }
});
request.open('GET', 'http://puzzle.mead.io/puzzle');
request.send();

