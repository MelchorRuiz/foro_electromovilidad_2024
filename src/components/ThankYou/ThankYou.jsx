import { useEffect } from 'react'
import confetti from 'canvas-confetti'
import { useThankYouPageStore } from '../../store/thankyou-page'
import './ThankYou.css'

export function ThankYou() {
    const { isSubmitting, pdfUrl } = useThankYouPageStore()

    useEffect(() => {
        if (!isSubmitting) {
            window.location.href = '/'
        }
    }, [isSubmitting])

    useEffect(() => {
        confetti()
        setInterval(() => {
            confetti()
        }, 3000)
    }, [])

    return (
        <div className='thank-you'>
            <div>
                <h1>Gracias por registrarte</h1>
                <div className='separator'></div>
            </div>
            <div className='logos'>
                <img src="\igeco_bn.webp" alt="Logo" />
                <img src="\deutsche_messe_bn.webp" alt="Logo" />
            </div>
            <div>
                <p>¡Fantastico! Tu registro ha sido enviado correctamente</p>
                <p>Recibirás un correo de confirmación en breve.</p>
            </div>
            <div>
                <a href={`http://localhost:3000/acknowledgments/${pdfUrl}.pdf`} target='_blank' >Descargar PDF</a>
            </div>
        </div>
    )
}