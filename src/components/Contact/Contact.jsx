import { useContactFormStore } from '../../store/contact-form'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { locationData } from '../../data/constans_states_and_cities'
import useFormEffects from './useFormEffects';
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
      <div>
        <label>Nombre</label>
        <input defaultValue={name} {...register('name')} />
      </div>
      <div>
        <label>Email</label>
        <input defaultValue={email} {...register('email')} />
      </div>
      <div>
        <label>Teléfono</label>
        <input defaultValue={phone} {...register('phone')} />
      </div>
      <div>
        <label>Empresa</label>
        <input defaultValue={company} {...register('company')} />
      </div>
      <div>
        <label>Cargo</label>
        <input defaultValue={position} {...register('position')} />
      </div>
      <div>
        <label>Estado</label>
        <select value={state} {...register('state')} >
          <option value="" disabled >Selecciona un estado</option>
          {states.map((state, index) => (
            <option key={index} value={state}>
              {state}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="city">Municipio</label>
        <select value={city} {...register('city')} >
          <option value="" disabled >Selecciona un municipio</option>
          {cities.map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}