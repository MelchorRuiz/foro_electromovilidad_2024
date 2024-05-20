import nodemailer from 'nodemailer'
import dotenv from 'dotenv'
import { emailTemplate } from './templates/email_template.js'
import { createPdf } from './pdf.js'

dotenv.config()

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_GMAIL,
    port: process.env.PORT_GMAIL,
    secure: true,
    auth: {
        user: process.env.USER_GMAIL,
        pass: process.env.PASS_GMAIL
    }
})

export async function sendEmail(user) {
    await transporter.sendMail({
        from: `"Foro de Electromovilidad" <${process.env.SMTP_GMAIL}>`,
        to: user.email,
        subject: 'Registro Exitoso',
        html: emailTemplate(user.name),
        attachments: [
            {
                filename: 'registro.pdf',
                content: await createPdf(user)
            }
        ]
    })
}