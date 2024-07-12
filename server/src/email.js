import nodemailer from 'nodemailer'
import templateEn from './templates/email_en.js'
import templateEs from './templates/email_es.js'
import 'dotenv/config';

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_GMAIL,
    port: process.env.PORT_GMAIL,
    secure: true,
    auth: {
        user: process.env.USER_GMAIL,
        pass: process.env.PASS_GMAIL
    }
})

export default async function sendEmail({ name, email, qr, locale }) {
    const info = await transporter.sendMail({
        from: `"Foro de Electromovilidad" <${process.env.SMTP_GMAIL}>`,
        to: email,
        subject: locale === 'en' ? 'Successful Registration' : 'Registro Exitoso',
        html: locale === 'en' ? templateEn( name, email) : templateEs( name, email),
        attachments: [{
            filename: 'qr.png',
            content: qr.split('base64,')[1],
            encoding: 'base64',
            cid: 'qr@cid'
        }]
    })
    return info
}