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

getPuzzle((error, puzzle) => {
    if (error) {
        console.log(`Error ${error}`)
    } else {
        console.log(puzzle);
    }

})

// const puzzle = getPuzzleSync()
// console.log(puzzle);
// console.log('do something else');

// const request = new XMLHttpRequest();
// request.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText);
//         console.log(data);
//     } else if (e.target.readyState === 4) {
//         console.log('An error has taken place');
//     }
// });
// request.open('GET', 'http://puzzle.mead.io/puzzle');
// request.send();

getCountryDetail("FR", (error, country) => {
    if (error) {
        console.log(`Error ${error}`)

    } else {
        console.log(country.name);
    }

})

// const countryCode = 'FR'
// const request = new XMLHttpRequest();
// request.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText);
//         const country = data.find((country) => country.alpha2Code === countryCode);
//          console.log(country.name);

//     } else if (e.target.readyState === 4) {
//         console.log('An error has taken place');
//     }
// })
// request.open('GET', 'https://restcountries.eu/rest/v2/all');
// request.send();


// const request = new XMLHttpRequest();
// request.addEventListener('readystatechange', (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         const data = JSON.parse(e.target.responseText);
//         const country = 'FR';
//         const findCountry = function (data, country) {
//             return data.find((result) => {
//                 return result.alpha2Code.toLowerCase() === country.toLowerCase();
//             })
//         }
//         const myCountry = findCountry(data, country);
//         console.log(myCountry.name);

//     } else if (e.target.readyState === 4) {
//         console.log('An error has taken place');
//     }
// })
// request.open('GET', 'https://restcountries.eu/rest/v2/all');
// request.send();
