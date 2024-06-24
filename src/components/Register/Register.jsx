import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { useRegisterFormStore } from '../../store/register-form.js'
import { useThankYouPageStore } from '../../store/thankyou-page'
import { locationData } from '../../data/constans_states_and_cities.js'
import { InputField, SelectField } from './Fields.jsx'

export function Register() {
  const {
    name,
    email,
    phone,
    company,
    position,
    state,
    city,
    setName,
    setEmail,
    setPhone,
    setCompany,
    setPosition,
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

  const onSubmit = async (data) => {
    try {
      const response = await fetch('http://localhost:3000/create-register', {
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
        window.location.href = '/gracias-por-registrarte'
      }
      if (response.status === 409) {
        setIsFailed(true)
      }
    } catch (error) {
      console.log(error)
    }

  }

  const states = Object.keys(locationData)
  const cities = state ? locationData[state] : []

  return (
    <form className='flex flex-wrap md:gap-[2%]' onSubmit={handleSubmit(onSubmit)}>
      <InputField
        className='md:w-full lg:w-[49%]'
        label='Nombre'
        defaultValue={name}
        register={register}
        errors={errors}
        name='name'
        validation={{
          required: 'El nombre es requerido',
          pattern: { value: /^[a-zA-ZÀ-ÿ\s']+$/, message: 'Nombre inválido' },
        }}
        handleValue={setName}
      />

      <InputField
        label='Email'
        defaultValue={email}
        register={register}
        errors={errors}
        name='email'
        validation={{
          required: 'El email es requerido',
          pattern: { value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, message: 'Email inválido' },
        }}
        handleValue={setEmail}
      />

      <InputField
        label='Teléfono'
        defaultValue={phone}
        register={register}
        errors={errors}
        name='phone'
        validation={{
          required: 'El teléfono es requerido',
          maxLength: {
            value: 10,
            message: 'El teléfono debe tener 10 dígitos',
          },
          minLength: {
            value: 10,
            message: 'El teléfono debe tener 10 dígitos',
          },
          pattern: {
            value: /^[0-9]+$/,
            message: 'Teléfono inválido',
          },
        }}
        handleValue={setPhone}
      />

      <InputField
        className='lg:w-[23.5%]'
        label='Empresa'
        defaultValue={company}
        register={register}
        errors={errors}
        name='company'
        validation={{ required: 'La empresa es requerida' }}
        handleValue={setCompany}
      />

      <InputField
        className='lg:w-[23.5%]'
        label='Cargo'
        defaultValue={position}
        register={register}
        errors={errors}
        name='position'
        validation={{ required: 'El cargo es requerido' }}
        handleValue={setPosition}
      />

      <SelectField
        label='Estado'
        options={states}
        defaultValue={state}
        register={register}
        errors={errors}
        name='state'
        validation={{ required: 'El estado es requerido' }}
        handleValue={(state) => {
          setState(state)
          setCity('')
        }}
      />

      <SelectField
        label='Municipio'
        options={cities}
        defaultValue={city}
        register={register}
        errors={errors}
        name='city'
        validation={{ required: 'El municipio es requerido' }}
        handleValue={setCity}
      />

      <br />
      {isFailed && (
        <div className="flex items-center p-4 mb-4 text-sm w-full text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800" role="alert">
          <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium">¡Oops, ha ocurrido un error!</span> El correo o teléfono ya han sido registrados.
          </div>
        </div>
      )}
      <button className='w-full bg-success text-white py-3 px-5 my-2 border-none rounded cursor-pointer' type='submit'>Enviar</button>
    </form>
  )
}
