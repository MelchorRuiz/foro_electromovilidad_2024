import { useEffect } from 'react'
import confetti from 'canvas-confetti'
import { useThankYouPageStore } from '../store/thankyou-page'

export function ThankYou({ i18n, homePath }) {
    const { isSubmitting, imageQR } = useThankYouPageStore()

    useEffect(() => {
        if (!isSubmitting) {
            window.location.href = homePath
        }
    }, [isSubmitting])

    useEffect(() => {
        confetti()
        setInterval(() => {
            confetti()
        }, 3000)
    }, [])

    return (
        <div className='w-full h-screen flex justify-center items-center flex-col gap-8 text-white'>
            <div>
                <h1 className='text-6xl font-jersey font-normal not-italic leading-none text-center text-emerald-100 md:text-[4rem] lg:text-[5rem]'>{i18n.title}</h1>
                <div className='w-[20%] h-[3px] bg-emerald-100 mx-auto mt-4 rounded-2xl md:w-[40%] lg:w-[60%]'></div>
            </div>
            <img className='max-w-48 md:max-w-64 lg:max-w-96' src="/assets/logos.webp" alt="Logo"  style={{filter: "grayscale(100%) brightness(100)"}} />
            <div>
                <p className='text-center text-sm md:text-base lg:text-xl'>{i18n.subtitle}</p>
                <p className='text-center text-sm md:text-xl lg:text-2xl'>{i18n.message}</p>
            </div>
            <img src={imageQR} alt="QR" />
        </div>
    )
}