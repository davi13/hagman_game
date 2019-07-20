
const getPuzzle = (callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText);
            callback(undefined, data.puzzle);
        } else if (e.target.readyState === 4) {
            callback('An error has taken place', undefined);
        }
    });
    request.open('GET', 'http://puzzle.mead.io/puzzle');
    request.send();
}

// const getPuzzleSync = () => {
//     const request = new XMLHttpRequest();
//     request.open('GET', 'http://puzzle.mead.io/puzzle', false);
//     request.send();
//     if (request.readyState === 4 && request.status === 200) {
//         const data = JSON.parse(request.responseText);
//         return data.puzzle
//     } else if (request.readyState === 4) {
//         throw new Error('things did not go well')
//     }
// };



const getCountryDetail = (countryCode, callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener('readystatechange', (e) => {
        if (e.target.readyState === 4 && e.target.status === 200) {
            const data = JSON.parse(e.target.responseText);
            const country = data.find((country) => country.alpha2Code === countryCode);
            callback(undefined, country);
        } else if (e.target.readyState === 4) {
            callback('An error has taken place', undefined);
        }
    })
    request.open('GET', `https://restcountries.eu/rest/v2/all`);
    request.send();
}