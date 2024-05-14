import { useForm } from 'react-hook-form'
import { useState } from 'react'
import confetti from 'canvas-confetti'
import { useContactFormStore } from '../../store/contact-form'
import { locationData } from '../../data/constans_states_and_cities'
import { InputField, SelectField } from './Fields.jsx'
import './Contact.css'

export function Contact() {
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
    resetForm,
  } = useContactFormStore()

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm()

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [progress, setProgress] = useState(100)

  const onSubmit = (data) => {
    // Reset form data and clean Zustand store
    reset()
    resetForm()
    console.log(data)
    setIsSubmitting(true)
    confetti()

    const interval = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 0) {
          clearInterval(interval)
          document.querySelector('.success').classList.add('closing')
          setTimeout(() => {
            setIsSubmitting(false)
            setProgress(100)
          }, 200)
        }
        if (oldProgress < 20) {
          return oldProgress - 0.5
        }
        if (oldProgress < 15) {
          return oldProgress - 0.3
        }
        if (oldProgress < 10) {
          return oldProgress - 0.2
        }
        if (oldProgress < 5) {
          return oldProgress - 0.1
        }
        return oldProgress - 1
      })
    }, 20)
  }

  const states = Object.keys(locationData)
  const cities = state ? locationData[state] : []

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          label='Nombre'
          defaultValue={name}
          register={register}
          errors={errors}
          name='name'
          validation={{ required: 'El nombre es requerido' }}
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
            pattern: { value: /^\S+@\S+$/i, message: 'Email inválido' },
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
          label='Empresa'
          defaultValue={company}
          register={register}
          errors={errors}
          name='company'
          validation={{ required: 'La empresa es requerida' }}
          handleValue={setCompany}
        />

        <InputField
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
        <button type='submit'>Enviar</button>
      </form>
      {isSubmitting && (
        <div className='success'>
          <button className='close' onClick={() => setIsSubmitting(false)}>
            ×
          </button>
          <h2>¡Gracias por tu mensaje!</h2>
          <p>En breve nos pondremos en contacto contigo.</p>
          <div className='progress-bar'>
            <div className='progress' style={{ width: `${progress}%` }} />
          </div>
        </div>
      )}
    </>
  )
}
