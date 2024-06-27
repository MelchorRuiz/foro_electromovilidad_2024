import PDFDocument from 'pdfkit'
import QRcode from 'qrcode'
import fs from 'fs'

export async function createPdf({
    uuid,
    name,
    email,
    phone,
    company,
    position,
    country,
    state,
    city
}) {
    const doc = new PDFDocument({ size: 'A4', margin: 50})
    const stream = doc.pipe(fs.createWriteStream(`./acknowledgments/${uuid}.pdf`))

    const createText = (doc, text, value) => {
        doc.font('Helvetica-Bold')
        .fontSize(16)
        .text(`${text}: `, {
            fill: true,
            continued: true
        })
        doc.font('Helvetica')
        .fontSize(14)
        .text(value, {
            stroke: false
        })
        doc.moveDown(0.4)
    }

    doc.polygon([0, 0], [595.28, 0], [595.28, 841.89], [0, 841.89])
    .fill('#EEEEEE')

    doc.moveDown(1)

    doc.font('Helvetica-Bold')
    .fontSize(36)
    .fillColor('#003C43')
    .text('Gracias por registrarte', {
        align: 'center'
    })
    .moveDown(0.4)

    doc.fillColor('#000000')

    doc.font('Helvetica')
    .fontSize(20)
    .text('A continuación se muestra la información que nos proporcionaste:', {
        align: 'center'
    })
    .moveDown(1)

    createText(doc, 'Nombre', name)
    createText(doc, 'Correo', email)
    createText(doc, 'Teléfono', phone)
    createText(doc, 'Empresa', company)
    createText(doc, 'Puesto', position)
    createText(doc, 'País', country)
    createText(doc, 'Estado', state)
    createText(doc, 'Municipio', city)

    doc.moveDown(1)

    doc.font('Helvetica')
    .fontSize(20)
    .text('Asegúrate de llevar este código QR contigo el día del evento.', {
        align: 'justify'
    })
    .moveDown(1)

    doc.image(await QRcode.toDataURL(uuid, {
        errorCorrectionLevel: 'H',
        type: 'image/png',
        quality: 1,
        width: 200,
        color: {
            dark: '#222831',
            light: '#eeeeee'
        }
    }), 197.64, 420)

    doc.image('./img/logo.png', 320.28, 766.89, { width: 250 })

    doc.polygon([15, 15], [580.28, 15], [580.28, 826.89], [15, 826.89])
    .lineWidth(2)
    .stroke('#000000')

    doc.end()
    return new Promise((resolve, reject) => {
        stream.on('finish', resolve)
        stream.on('error', reject)
    })
}