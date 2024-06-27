import { set, useForm } from 'react-hook-form'
import { useState, useEffect } from 'react'
import { useRegisterFormStore } from '../../store/register-form.js'
import { useThankYouPageStore } from '../../store/thankyou-page'
import locationData from '../../data/states_and_cities.json'
import countries from '../../data/countries.json'
import { InputField, SelectField } from './Fields.jsx'

export function Register({ i18n, thankYouPagePath }) {
  const {
    name,
    email,
    phone,
    company,
    position,
    country,
    state,
    city,
    setName,
    setEmail,
    setPhone,
    setCompany,
    setPosition,
    setCountry,
    setState,
    setCity,
    reset,
  } = useRegisterFormStore()

  const { setSubmitting, setPdfUrl } = useThankYouPageStore()

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  const [isFailed, setIsFailed] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [cities, setCities] = useState([])

  const states = Object.keys(locationData)
  useEffect(() => {
    if (country !== 'Mexico') return
    setCities(locationData[state] || [])
  }, [state]);

  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isLoading]);


  const onSubmit = async (data) => {
    setIsLoading(true)
    const url = import.meta.env.DEV ? 'http://localhost:3000/create-register' : 'https://api.example.com/create-register'
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      if (response.status === 201) {
        const data = await response.json()
        reset()
        setSubmitting(true)
        setPdfUrl(data.uuid)
        setIsLoading(false)
        window.location.href = thankYouPagePath
      }
      if (response.status === 409) {
        setIsFailed(true)
        setIsLoading(false)
      }
    } catch (error) {
      console.log(error)
      setIsFailed(true)
      setIsLoading(false)
    }

  }

  return (
    <>
    <form className='flex flex-wrap md:gap-[2%]' onSubmit={handleSubmit(onSubmit)}>
      <InputField
        className='lg:w-[49%]'
        label={i18n.name.label}
        defaultValue={name}
        register={register}
        errors={errors}
        name='name'
        validation={{
          required: i18n.name.required,
          pattern: { value: /^[a-zA-ZÀ-ÿ\s']+$/, message: i18n.name.invalid },
        }}
        handleValue={setName}
      />

      <InputField
        label={i18n.email.label}
        defaultValue={email}
        register={register}
        errors={errors}
        name={'email'}
        validation={{
          required: i18n.email.required,
          pattern: { value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, message: i18n.email.invalid },
        }}
        handleValue={setEmail}
      />

      <InputField
        label={i18n.phone.label}
        defaultValue={phone}
        register={register}
        errors={errors}
        name='phone'
        validation={{
          required: i18n.phone.required,
          maxLength: {
            value: 10,
            message: i18n.phone.maxLength,
          },
          minLength: {
            value: 10,
            message: i18n.phone.minLength,
          },
          pattern: {
            value: /^[0-9]+$/,
            message: i18n.phone.invalid,
          },
        }}
        handleValue={setPhone}
      />

      <InputField
        className='lg:w-[23.5%]'
        label={i18n.company.label}
        defaultValue={company}
        register={register}
        errors={errors}
        name='company'
        validation={{ required: i18n.company.required }}
        handleValue={setCompany}
      />

      <InputField
        className='lg:w-[23.5%]'
        label={i18n.position.label}
        defaultValue={position}
        register={register}
        errors={errors}
        name='position'
        validation={{ required: i18n.position.required }}
        handleValue={setPosition}
      />

      <SelectField
        className='lg:w-[23.5%]'
        label={i18n.country.label}
        placeholder={i18n.selectPlaceHolder}
        options={countries.map((country) => country.name)}
        defaultValue={country}
        register={register}
        errors={errors}
        name='country'
        validation={{ required: i18n.country.required }}
        handleValue={setCountry}
      />

      {
        country === 'Mexico' ? (
          <>
            <SelectField
              className='lg:w-[23.5%]'
              label={i18n.state.label}
              placeholder={i18n.selectPlaceHolder}
              options={states}
              defaultValue={state}
              register={register}
              errors={errors}
              name='state'
              validation={{ required: i18n.state.required }}
              handleValue={(state) => {
                setState(state)
                setCity('')
              }}
            />

            <SelectField
              label={i18n.city.label}
              placeholder={i18n.selectPlaceHolder}
              options={cities}
              defaultValue={city}
              register={register}
              errors={errors}
              name='city'
              validation={{ required: i18n.city.required }}
              handleValue={setCity}
            />
          </>
        ) : (
          <>
            <InputField
              className='lg:w-[23.5%]'
              label={i18n.state.label}
              defaultValue={state}
              register={register}
              errors={errors}
              name='state'
              validation={{ required: i18n.state.required }}
              handleValue={setState}
            />

            <InputField
              label={i18n.city.label}
              defaultValue={city}
              register={register}
              errors={errors}
              name='city'
              validation={{ required: i18n.city.required }}
              handleValue={setCity}
            />
          </>
        )
      }

      <br />
      {isFailed && (
        <div className="flex items-center p-4 mb-4 text-sm w-full text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
          <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium">{i18n.error1}</span> {i18n.error2}
          </div>
        </div>
      )}
      <button className='w-full bg-success text-white py-3 px-5 my-2 border-none rounded cursor-pointer' type='submit'>{i18n.submit}</button>
    </form>
    {
      isLoading && (
        <div className='fixed top-0 left-0 w-full h-full bg-gray-300 bg-opacity-80 flex items-center justify-center z-30 overflow-hidden'>
          <div className='w-28'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200"><circle fill="#000000" stroke="#000000" stroke-width="15" r="15" cx="40" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.4"></animate></circle><circle fill="#000000" stroke="#000000" stroke-width="15" r="15" cx="100" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="-.2"></animate></circle><circle fill="#000000" stroke="#000000" stroke-width="15" r="15" cx="160" cy="100"><animate attributeName="opacity" calcMode="spline" dur="2" values="1;0;1;" keySplines=".5 0 .5 1;.5 0 .5 1" repeatCount="indefinite" begin="0"></animate></circle></svg>
          </div>
        </div>
      )
    }
    </>
  )
}
