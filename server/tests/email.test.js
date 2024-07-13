import { test } from 'node:test'
import assert from 'node:assert'
import QRCode from 'qrcode'
import sendEmail from '../src/email.js'

const email = 'melchor.ruiz@igeco.mx'

test('send spanish email', async () => {
    const qr = await QRCode.toDataURL('123')
    const info = await sendEmail({ name: 'test', email: email, qr: qr, locale: 'es' })
    assert.strictEqual(info.accepted[0], email)
})

test('send english email', async () => {
    const qr = await QRCode.toDataURL('123')
    const info = await sendEmail({ name: 'test', email: email, qr: qr, locale: 'en' })
    assert.strictEqual(info.accepted[0], email)
})