//Rendering the game to the dom
const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
const game1 = new Hangman('cat', 3);

puzzleEl.textContent = game1.getPuzzle()
guessesEl.textContent = game1.remainingGuesses;
console.log(game1.status);
//Listen every key word press from de user
window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    puzzleEl.textContent = game1.getPuzzle();
    guessesEl.textContent = game1.remainingGuesses;
    // const myArr = guess.split('');
    // myArr.forEach(element => {
    //     if (myArr === game1.guessedLetter) {
    //         game1.status = 'finish !!!'
    //         console.log(game1.status);
    //         console.log(myArr);
    //     }
    // });
    //game1.recalStatus();
    console.log(game1.status);
});

