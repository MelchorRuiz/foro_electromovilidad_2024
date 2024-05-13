import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { useContactFormStore } from '../../store/contact-form'
import { locationData } from '../../data/constans_states_and_cities'
import useFormEffects from './useFormEffects';
import { InputField, SelectField } from './Fields.jsx';
import './Contact.css'

export function Contact() {
  const {
    name,
    email,
    phone,
    company,
    position,
    state,
    city
  } = useContactFormStore();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
  }

  const [states, setStates] = useState([])
  const [cities, setCities] = useState([])
  const name_watch = watch('name')
  const email_watch = watch('email')
  const phone_watch = watch('phone')
  const company_watch = watch('company')
  const position_watch = watch('position')
  const state_watch = watch('state')
  const city_watch = watch('city')

  useEffect(() => {
    const states = Object.keys(locationData)
    setStates(states)
  }, [])

  useEffect(() => {
    if (state) {
      const cities = locationData[state]
      setCities(cities)
    }
  }, [state])

  const watchValues = { name_watch, email_watch, phone_watch, company_watch, position_watch, state_watch, city_watch }  
  useFormEffects(watchValues);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField label="Nombre" defaultValue={name} register={register} name="name" />
      <InputField label="Email" defaultValue={email} register={register} name="email" />
      <InputField label="Teléfono" defaultValue={phone} register={register} name="phone" />
      <InputField label="Empresa" defaultValue={company} register={register} name="company" />
      <InputField label="Cargo" defaultValue={position} register={register} name="position" />
      <SelectField label="Estado" options={states} defaultValue={state} register={register} name="state" />
      <SelectField label="Municipio" options={cities} defaultValue={city} register={register} name="city" />
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}