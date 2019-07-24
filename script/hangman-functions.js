//Rendering the game to the dom

const puzzleEl = document.querySelector('#puzzle');
const guessesEl = document.querySelector('#guesses');
let game1
//  puzzleEl.textContent = game1.puzzle
// guessesEl.textContent = game1.statusMessage;

//Listen every key word press from de user
window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode);
    game1.makeGuess(guess);
    render();

});
const render = () => {
    puzzleEl.innerHTML = ''
    guessesEl.textContent = game1.statusMessage;
    game1.puzzle.split('').forEach((letter) => {
        const spanEl = document.createElement('span')
        spanEl.textContent = letter;
        puzzleEl.appendChild(spanEl);

    })






    // filteredNotes.forEach((note) => {
    //     const noteEl = generateNoteDOM(note)
    //     document.querySelector('#notes').appendChild(noteEl)
    // })

}

const startGame = async () => {
    const puzzle = await getPuzzle('2');
    game1 = new Hangman(puzzle, 5);
    render();
}
document.querySelector('#reset').addEventListener('click', startGame)


// getPuzzle('2').then((puzzle) => {
//     console.log(puzzle)
// }, (err) => {
//     console.log(`Error : ${err}`);
// });




// getCountryDetail('FR').then((data) => {
//     console.log(data.name);
// }, (err) => {
//     console.log(err)
// });

// fetch('http://puzzle.mead.io/puzzle', {})
//     .then((response) => {
//         if (response.status === 200) {
//             return response.json();
//         } else {
//             throw new Error('Unable to fetch the puzzle');
//         }
//     }).then((data) => {
//         console.log(data.puzzle);
//     }).catch((error) => {
//         console.log(error);
//     })

// getLocation().then((data) => {
//     console.log(`Your are curretly in ${data.city} ${data.region} ${data.country}`);

// }, (err) => {
//     console.log(err);
// })
// getCurrentCountry()
//     .then((country) => {
//         console.log(country.name);
//     }).catch((error) => {
//         console.log(error);
//     })

// getLocation().then((location) => {
//     return getCountryDetail(location.country);
// }).then((country) => {
//     console.log(country.name);
// }).catch((err) => {
//     console.log('Error: ' + err);
// })
