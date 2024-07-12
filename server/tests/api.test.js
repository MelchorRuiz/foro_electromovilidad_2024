import { test } from 'node:test'
import assert from 'node:assert'
import supertest from 'supertest'
import app from '../src/app.js'

const api = supertest(app)

test('Healthcheck', async () => {
    const response = await api.get('/healthcheck/')
    assert.strictEqual(response.status, 200)
    assert.deepStrictEqual(response.body, {status: 'ok'})
})

test('Create register', async () => {
    const user = {
        "name": "melchor ruiz",
        "email": "melchor.ruiz@igeco.mx",
        "phone": "5555555555",
        "company": "IGECO",
        "position": "Developer",
        "country": "Mexico",
        "state": "Guanajuato",
        "city": "Leon",
        "locale": "es"
    }

    const response = await api.post('/create-register/').send(user)
    assert.strictEqual(response.status, 201)
})