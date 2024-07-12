import { test } from 'node:test'
import assert from 'node:assert'
import createRegistro from '../src/db.js'

test('uuid is required', async () => {
    try {
        await createRegistro({})
    } catch (error) {
        assert.strictEqual(error.message, 'Error: Column \'uuid\' cannot be null')
    }
})

test('name is required', async () => {
    try {
        await createRegistro({ "uuid": "123" })
    } catch (error) {
        assert.strictEqual(error.message, 'Error: Column \'name\' cannot be null')
    }
})

test('email is required', async () => {
    try {
        await createRegistro({ "uuid": "123", "name": "123" })
    } catch (error) {
        assert.strictEqual(error.message, 'Error: Column \'email\' cannot be null')
    }
})

test('phone is required', async () => {
    try {
        await createRegistro({ "uuid": "123", "name": "123", "email": "123" })
    } catch (error) {
        assert.strictEqual(error.message, 'Error: Column \'phone\' cannot be null')
    }
})

test('company is required', async () => {
    try {
        await createRegistro({ "uuid": "123", "name": "123", "email": "123", "phone": "123" })
    } catch (error) {
        assert.strictEqual(error.message, 'Error: Column \'company\' cannot be null')
    }
})

test('position is required', async () => {
    try {
        await createRegistro({ "uuid": "123", "name": "123", "email": "123", "phone": "123", "company": "123" })
    } catch (error) {
        assert.strictEqual(error.message, 'Error: Column \'position\' cannot be null')
    }
})

test('country is required', async () => {
    try {
        await createRegistro({ "uuid": "123", "name": "123", "email": "123", "phone": "123", "company": "123", "position": "123" })
    } catch (error) {
        assert.strictEqual(error.message, 'Error: Column \'country\' cannot be null')
    }
})

test('state is required', async () => {
    try {
        await createRegistro({ "uuid": "123", "name": "123", "email": "123", "phone": "123", "company": "123", "position": "123", "country": "123" })
    } catch (error) {
        assert.strictEqual(error.message, 'Error: Column \'state\' cannot be null')
    }
})

test('city is required', async () => {
    try {
        await createRegistro({ "uuid": "123", "name": "123", "email": "123", "phone": "123", "company": "123", "position": "123", "country": "123", "state": "123" })
    } catch (error) {
        assert.strictEqual(error.message, 'Error: Column \'city\' cannot be null')
    }
})

test('mail or telephone already exist', async () => {
    try {
        await createRegistro({"uuid": "123", "name": "123", "email": "wesa@mailinator.com", "phone": "8109442685", "company": "123", "position": "123", "country": "123", "state": "123", "city": "123" })
    } catch (error) {
        assert.strictEqual(error.message, 'Mail or telephone already exist')
    }
})