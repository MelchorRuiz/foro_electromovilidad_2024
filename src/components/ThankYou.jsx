import { useEffect } from 'react'
import confetti from 'canvas-confetti'
import { useThankYouPageStore } from '../store/thankyou-page'

export function ThankYou({ i18n, homePath }) {
    const { isSubmitting, pdfUrl } = useThankYouPageStore()

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
            <div className='flex justify-center gap-4 w-24 md:w-36 lg:w-48'>
                <img src="\igeco_bn.webp" alt="Logo" />
                <img src="\deutsche_messe_bn.webp" alt="Logo" />
            </div>
            <div>
                <p className='text-center text-sm md:text-base lg:text-xl'>{i18n.subtitle}</p>
                <p className='text-center text-lg md:text-xl lg:text-2xl'>{i18n.message}</p>
            </div>
            <div>
                <a className='bg-secondary p-4 rounded-2xl transition-all duration-300 ease-in hover:bg-green-300 hover:text-secondary' href={`http://localhost:3000/acknowledgments/${pdfUrl}.pdf`} target='_blank' >{i18n.button}</a>
            </div>
        </div>
    )
}