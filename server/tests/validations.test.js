import { test } from 'node:test'
import assert from 'node:assert'
import validateUser from '../src/validations.js'

const voidUser = {
    "name": "",
    "email": "",
    "phone": "",
    "company": "",
    "position": "",
    "country": "",
    "state": "",
    "city": ""
}

test('all fields are required', () => {
    const expected = ['Name is required', 'Email is required', 'Phone is required', 'Company is required', 'Position is required', 'Country is required', 'State is required', 'City is required']
    const errors = validateUser(voidUser)
    assert.deepStrictEqual(errors, expected)
})

test('name is not valid', () => {
    const user = {
        ...voidUser,
        "name": "123"
    }
    const errors = validateUser(user)
    assert.strictEqual(errors.includes('Name is not valid'), true)
})

test('email is not valid', () => {
    const user = {
        ...voidUser,
        "email": "123"
    }
    const errors = validateUser(user)
    assert.strictEqual(errors.includes('Email is not valid'), true)
})

test('phone is not valid', () => {
    const user = {
        ...voidUser,
        "phone": "123"
    }
    const errors = validateUser(user)
    assert.strictEqual(errors.includes('Phone is not valid'), true)
})

test('country is not valid', () => {
    const user = {
        ...voidUser,
        "country": "123"
    }
    const errors = validateUser(user)
    assert.strictEqual(errors.includes('Country is not valid'), true)
})

test('state is not valid', () => {
    const user = {
        ...voidUser,
        "country": "Mexico",
        "state": "123"
    }
    const errors = validateUser(user)
    assert.strictEqual(errors.includes('State is not valid'), true)
})

test('city is not valid', () => {
    const user = {
        ...voidUser,
        "country": "Mexico",
        "state": "Aguascalientes",
        "city": "123"
    }
    const errors = validateUser(user)
    assert.strictEqual(errors.includes('City is not valid'), true)
})

test('valid user', () => {
    const user = {
        "name": "John Doe",
        "email": "john.doe@hola.com",
        "phone": "1234567890",
        "company": "Hola",
        "position": "Developer",
        "country": "Mexico",
        "state": "Aguascalientes",
        "city": "Aguascalientes"
    }
    const errors = validateUser(user)
    assert.deepStrictEqual(errors, [])
})
