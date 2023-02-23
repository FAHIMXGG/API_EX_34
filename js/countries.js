const loadCountries = () => {
    fetch('https://restcountries.com/v3.1/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

const displayCountries = countries => {
    const countryCon = document.getElementById('all-countries')

    //console.log(countries);
    // for (const country of countries){
    //     console.log(country)
    // }
    countries.forEach(country => {
        console.log(country)
        const countryDiv = document.createElement('div')
        countryDiv.classList.add('country')
        countryDiv.innerHTML = `
            <h3> name: ${country.name.common}</h3>
            <p> name: ${country.capital ? country.capital[0] : 'no capital'}</p>
            <button onclick="displayCountryDetails('${country.cca2}')">details</button>
        `;
        countryCon.appendChild(countryDiv)
    });
}


const displayCountryDetails = code =>{
    //https://restcountries.com/v3.1/alpha/{code}
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    console.log(url)
    fetch(url)
    .then (res => res.json())
    .then (data => console.log(data))
}

loadCountries();