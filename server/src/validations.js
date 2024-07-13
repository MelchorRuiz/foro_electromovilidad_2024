import { createRequire } from "module";
const require = createRequire(import.meta.url);
const locationData = require("./data/states_and_cities.json");
const countries = require("./data/countries.json");

export default function validateUser (user) {
    const errors = []
    
    const nameError = validateName(user.name)
    if (nameError) errors.push(nameError)

    const emailError = validateEmail(user.email)
    if (emailError) errors.push(emailError)

    const phoneError = validatePhone(user.phone)
    if (phoneError) errors.push(phoneError)

    const companyError = validateCompany(user.company)
    if (companyError) errors.push(companyError)

    const positionError = validatePosition(user.position)
    if (positionError) errors.push(positionError)

    const countryError = validateCountry(user.country)
    if (countryError) errors.push(countryError)

    const stateError = validateState(user.country, user.state)
    if (stateError) errors.push(stateError)

    const cityError = validateCity(user.country, user.state, user.city)
    if (cityError) errors.push(cityError)

    return errors;
}

function validateName(name) {
    const nameRegex = /^[a-zA-ZÀ-ÿ\s']+$/;
    if (!name) return 'Name is required'
    if (!nameRegex.test(name)) return 'Name is not valid'
}

function validateEmail(email) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!email) return 'Email is required'
    if (!emailRegex.test(email)) return 'Email is not valid'
}

function validatePhone(phone) {
    const phoneRegex = /^\d{10}$/;
    if (!phone) return 'Phone is required'
    if (!phoneRegex.test(phone)) return 'Phone is not valid'
}

function validateCompany(company) {
    const errors = [];
    if (!company) return 'Company is required'
}

function validatePosition(position) {
    const errors = [];
    if (!position) return 'Position is required'
}

function validateCountry(country) {
    if (!country) return 'Country is required'
    if (countries.find(c => c.name === country) === undefined) return 'Country is not valid'
}

function validateState(country, state) {
    if (!state) return 'State is required'
    if (country === 'Mexico' && !locationData[state]) return 'State is not valid'
}

function validateCity(country, state, city) {
    if (!city) return 'City is required'
    if (country === 'Mexico' && !locationData[state].includes(city)) return 'City is not valid'
}