const getPuzzle = async (wordCount) => {
    const response = await fetch(`//puzzle.mead.io/puzzle?wordCount=${wordCount}`);

    if (response.status === 200) {
        const data = await response.json();
        return data.puzzle;
    } else {
        throw new Error('Unable to fetch puzzle');
    }
}

const getCurrentCountry = async () => {
    const location = await getLocation();
    const country = await getCountryDetail(location.country);
    return country


}

const getCountryDetail = async (countryCode) => {
    const response = await fetch('//restcountries.eu/rest/v2/all');

    if (response.status === 200) {
        const data = await response.json();
        return data.find((country) => country.alpha2Code === countryCode);
    } else {
        throw new Error('Unable to fetch the country');
    }

}

const getLocation = async () => {
    const response = await fetch('//ipinfo.io/json?token=f78bfb3a612b24');

    if (response.status) {
        const country = await response.json();
        return country;
    } else {
        throw new Error('Unable to fetch the courrent location');
    }
}
//export { getPuzzle as default };