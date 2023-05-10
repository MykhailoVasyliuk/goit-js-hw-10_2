export function fetchCountries(name){
    const BASE_URL = 'https://restcountries.com/v3.1/name';

    fetch(`{BASE_URL}/{name}?fields=name,capital,currencies`)
    .then(response => console.log(response))
     
} 
