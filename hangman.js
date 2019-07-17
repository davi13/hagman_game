const Hangman = function (word, remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.remainingGuesses = remainingGuesses;
    this.guessedLetter = [];
}
Hangman.prototype.getPuzzle = function () {
    let puzzle = '';
    this.word.forEach(letter => {
        if (this.guessedLetter.includes(letter) || letter == ' ') {
            puzzle += letter;
        } else {
            puzzle += '*';
        }
    });
    return puzzle;
}

Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase();
    const isUnique = !this.guessedLetter.includes(guess);
    isBadGuess = this.guessedLetter.includes(guess)

    if (isUnique) {
        this.guessedLetter.push(guess);
    }
    if (isUnique && isBadGuess) {
        this.remainingGuesses--;
    }

    // this.word.forEach(guess => {
    //     if (this.guessedLetter.includes(guess)) {
    //         console.log('the letter is already exits');
    //     } else {
    //         this.guessedLetter.push(this.word);
    //     }
    // })

}
const game1 = new Hangman('cat', 3);

game1.makeGuess('c');
game1.makeGuess('t');
game1.makeGuess('z');
console.log(game1.getPuzzle());
console.log(game1.remainingGuesses);

const game2 = new Hangman('New Jersey', 3);
game2.makeGuess('w');
console.log(game2.getPuzzle());

