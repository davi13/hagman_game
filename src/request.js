const getPuzzle = async (wordCount) => {
    const response = await fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`);

    if (response.status === 200) {
        const data = await response.json();
        return data.puzzle;
    } else {
        throw new Error('Unable to fetch puzzle');
    }
}
// const getPuzzleOld = (wordCount) => {
//     return fetch(`http://puzzle.mead.io/puzzle?wordCount=${wordCount}`)
//         .then((response) => {
//             if (response.status === 200) {
//                 return response.json()
//             } else {
//                 throw new Error('Unable to fetch puzzle');
//             }
//         })
// }



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

// const getCountryDetail = (countryCode) => {
//     return fetch('https://restcountries.eu/rest/v2/all')
//         .then((response) => {
//             if (response.status === 200) {
//                 return response.json();

//             } else {
//                 throw new Error('Unable to fetch puzzle');
//             }
//         }).then((data) => {
//             return data.find((country) => country.alpha2Code === countryCode);
//         })
// }
// const getLocation = () => {
//     return fetch('http://ipinfo.io/json?token=f78bfb3a612b24')
//         .then((response) => {
//             if (response.status === 200) {
//                 return response.json();

//             } else {
//                 throw new Error('Unable to fetch location')
//             }
//         }).then((data) => {
//             return data;
//         })
// }

// const getCountryDetail = (countryCode) => new Promise((resolve, reject) => {
//     const request = new XMLHttpRequest();
//     request.addEventListener('readystatechange', (e) => {
//         if (e.target.readyState === 4 && e.target.status === 200) {
//             const data = JSON.parse(e.target.responseText);
//             const country = data.find((country) => country.alpha2Code === countryCode);
//             resolve(country);
//         } else if (e.target.readyState === 4) {
//             reject('An error has taken place');
//         }
//     })
//     request.open('GET', `https://restcountries.eu/rest/v2/all`);
//     request.send();

// })

const getCurrentCountry = async () => {
    const location = await getLocation();
    const country = await getCountryDetail(location.country);
    return country


}

const getCountryDetail = async (countryCode) => {
    const response = await fetch('https://restcountries.eu/rest/v2/all');

    if (response.status === 200) {
        const data = await response.json();
        return data.find((country) => country.alpha2Code === countryCode);
    } else {
        throw new Error('Unable to fetch the country');
    }

}

const getLocation = async () => {
    const response = await fetch('http://ipinfo.io/json?token=f78bfb3a612b24');

    if (response.status) {
        const country = await response.json();
        return country;
    } else {
        throw new Error('Unable to fetch the courrent location');
    }
}
export { getPuzzle as default };