import PDFDocument from 'pdfkit'
import QRcode from 'qrcode'

export async function createPdf({
    uuid,
    name,
    email,
    phone,
    company,
    position,
    state,
    city
}) {
    const doc = new PDFDocument()

    const createText = (doc, text, value) => {
        doc.text(`${text}: `, {
            stroke: true,
            fill: true,
            continued: true
        }).text(value, {
            stroke: false
        }).moveDown(0.4)
    }

    createText(doc, 'Nombre', name)
    createText(doc, 'Correo', email)
    createText(doc, 'Teléfono', phone)
    createText(doc, 'Empresa', company)
    createText(doc, 'Puesto', position)
    createText(doc, 'Estado', state)
    createText(doc, 'Municipio', city)

    doc.image(await QRcode.toDataURL(uuid), {
        width: 200
    })

    doc.end()
    return doc
}