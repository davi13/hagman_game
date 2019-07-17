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
    isBadGuess = !this.guessedLetter.includes(guess)

    if (isUnique) {
        this.guessedLetter.push(guess);
    }
    if (isUnique && isBadGuess) {
        this.remainingGuesses--;
    }
}





