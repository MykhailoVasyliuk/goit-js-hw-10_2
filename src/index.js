import './css/styles.css';
import debounce from 'lodash.debounce';
import { fetchCountries } from './js/fetchCountries';

const refs = {
    input: document.querySelector('#search-box'),
    list: document.querySelector('.country-list'),
    info: document.querySelector('.country-info'),
  };
const DEBOUNCE_DELAY = 300;

let countryName = '';

refs.input.addEventListener('input', debounce(onCountryInput, DEBOUNCE_DELAY) );

function onCountryInput() {
  countryName = refs.input.value.trim();
  
  fetchCountries(countryName).then(data => {
    refs.info.innerHTML = onCountryMarkup(data) ; 
  })
  
}

function onCountryMarkup(countries) {
  return countries
    .map(
      ({ name, capital, population, flags, languages }) =>
        `<div class = "country-item"><img src="${flags.svg}" alt="${
          name.official
        }" width='64' height = '40'>
        <h1 class="country-text">${name.official}</h1></div>
        <p class="country-text-info">Capital: ${capital}</p>
        <p class="country-text-info">Population: ${population}</p>
        <p class="country-text-info">Languages: ${Object.values(languages)} </p>
        `
    )
    .join('');
}

 