import { useCountdown } from '../hooks/useCounterDown'

export function CounterDown({ i18n }) {
  const { days, hours, minutes, seconds } = useCountdown('23 sept 2024 10:00:00')
  return (
    <div className='text-black bg-transparent grid grid-cols-2 md:grid-cols-4 gap-4 text-sm md:text-lg font-semibold p-5 border rounded-lg mt-4 w-full'>
      <div className='flex flex-col items-center'>
        <span className='font-extrabold  text-4xl lg:text-5xl'>{days}</span>{' '}
        {i18n.days}
      </div>
      <div className='flex flex-col items-center'>
        <span className='font-extrabold text-4xl lg:text-5xl'>{hours}</span>{' '}
        {i18n.hours}
      </div>
      <div className='flex flex-col items-center'>
        <span className='font-extrabold text-4xl lg:text-5xl'>{minutes}</span>{' '}
        {i18n.minutes}
      </div>
      <div className='flex flex-col items-center'>
        <span className='font-extrabold text-4xl lg:text-5xl'>{seconds}</span>{' '}
        {i18n.seconds}
      </div>
    </div>
  )
}