import nodemailer from 'nodemailer'
import { emailTemplate } from './email_template.js'

const transporter = nodemailer.createTransport({
    host: process.env.SMTP_GMAIL,
    port: process.env.PORT_GMAIL,
    secure: true,
    auth: {
        user: process.env.USER_GMAIL,
        pass: process.env.PASS_GMAIL
    }
})

export async function sendEmail({ name, email, uuid }) {
    await transporter.sendMail({
        from: `"Foro de Electromovilidad" <${process.env.SMTP_GMAIL}>`,
        to: email,
        subject: 'Registro Exitoso',
        html: emailTemplate(name),
        attachments: [
            {
                filename: 'registro.pdf',
                path: './acknowledgments/' + uuid + '.pdf',
            }
        ]
    })
}