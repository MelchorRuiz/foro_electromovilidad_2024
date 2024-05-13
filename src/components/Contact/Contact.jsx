import { useContactFormStore } from '../../store/contact-form'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { locationData } from '../../data/constans_states_and_cities'
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
    reset
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
    const states =  Object.keys(locationData)
    setStates(states)
  }, [])

  useEffect(() => {
    if (state) {
      const cities = locationData[state]
      setCities(cities)
    }
  }, [state])

  useEffect(() => {
    setName(name_watch)
  }, [name_watch])
  useEffect(() => {
    setEmail(email_watch)
  }, [email_watch])
  useEffect(() => {
    setPhone(phone_watch)
  }, [phone_watch])
  useEffect(() => {
    setCompany(company_watch)
  }, [company_watch])
  useEffect(() => {
    setPosition(position_watch)
  }, [position_watch])
  useEffect(() => {
    if (state_watch) {
      setState(state_watch)
      setCity('')
    }
  }, [state_watch])
  useEffect(() => {
    if (city_watch) {
      setCity(city_watch)
    } 
  }, [city_watch])

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