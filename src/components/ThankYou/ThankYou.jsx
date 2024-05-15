import { useEffect } from 'react'
import confetti from 'canvas-confetti'
import { useRegisterFormStore } from '../../store/register-form'
import './ThankYou.css'

export function ThankYou() {
    const { isSubmitting } = useRegisterFormStore()

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
                <p>¡Fantastico! Tu registro a sido enviado correctamente</p>
                <p>Recibirás un correo de confirmación en breve.</p>
            </div>
        </div>
    )
}