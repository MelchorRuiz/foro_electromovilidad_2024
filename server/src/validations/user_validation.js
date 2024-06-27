import locationData from "./states_and_cities.json" assert { type: "json" };
import countries from "./countries.json" assert { type: "json" };

export function validateUser (user) {
    const errors = []
    errors.push(...validateName(user.name));
    errors.push(...validateEmail(user.email));
    errors.push(...validatePhone(user.phone));
    errors.push(...validateCompany(user.company));
    errors.push(...validatePosition(user.position));
    errors.push(...validateLocation(user.country, user.state, user.city));
    return errors;
}

function validateName(name) {
    const nameRegex = /^[a-zA-ZÀ-ÿ\s']+$/;
    const errors = [];
    if (!name) {
        errors.push('Name is required');
    }
    if (!nameRegex.test(name)) {
        errors.push('Name is not valid');
    }
    return errors;
}

function validateEmail(email) {
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const errors = [];
    if (!email) {
        errors.push('Email is required');
    }
    if (!emailRegex.test(email)) {
        errors.push('Email is not valid');
    }
    return errors;
}

function validatePhone(phone) {
    const phoneRegex = /^\d{10}$/;
    const errors = [];
    if (!phone) {
        errors.push('Phone is required');
    }
    if (!phoneRegex.test(phone)) {
        errors.push('Phone is not valid');
    }
    return errors;
}

function validateCompany(company) {
    const errors = [];
    if (!company) {
        errors.push('Company is required');
    }
    return errors;
}

function validatePosition(position) {
    const errors = [];
    if (!position) {
        errors.push('Position is required');
    }
    return errors;
}

function validateLocation (country, state, city) {
    const errors = [];
    if (!country) {
        errors.push('Country is required');
    }
    if (!state) {
        errors.push('State is required');
    }
    if (!city) {
        errors.push('City is required');
    }
    if (countries.find(c => c.name === country) === undefined) {
        errors.push('Country is not valid');
    }
    if (country === 'Mexico'){
        if (!locationData[state]) {
            errors.push('State is not valid');
        } else if (!locationData[state].includes(city)) {
            errors.push('City is not valid');
        }
    }
    return errors;
}