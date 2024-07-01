import { useCountdown } from '../hooks/useCounterDown'

export function CounterDown({ i18n }) {
  const { days, hours, minutes, seconds } = useCountdown('5 sept 2024 3:00:00')
  return (
    <div className='text-white bg-transparent bg-opacity-50 backdrop-blur-md flex text-center justify-center gap-3 text-sm font-semibold py-5 px-5 border rounded-lg mt-4 w-full max-w-[500px]'>
      <div>
        <span className='font-extrabold  text-4xl lg:text-5xl'>{days}</span>{' '}
        {i18n.days}
      </div>
      <div>
        <span className='font-extrabold text-4xl lg:text-5xl'>{hours}</span>{' '}
        {i18n.hours}
      </div>
      <div>
        <span className='font-extrabold text-4xl lg:text-5xl'>{minutes}</span>{' '}
        {i18n.minutes}
      </div>
      <div>
        <span className='font-extrabold text-4xl lg:text-5xl'>{seconds}</span>{' '}
        {i18n.seconds}
      </div>
    </div>
  )
}