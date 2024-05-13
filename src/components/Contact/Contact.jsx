import { useContactFormStore } from '../../store/contact-form'
import { useState, useEffect } from 'react'
import { location_data } from '../../data/constans_states_and_cities'
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

  const handleSubmit = (e) => {
    reset()
    e.target.reset()
    alert(`Gracias por enviar tus datos, ${name}!`)
  }

  const handleStateChange = (e) => {
    const state = e.target.value
    setState(state)
    setCity('')
  }

  const [states, setStates] = useState([])
  const [cities, setCities] = useState([])

  useEffect(() => {
    const states =  Object.keys(location_data)
    setStates(states)
  }, [])

  useEffect(() => {
    if (state) {
      const cities = location_data[state]
      setCities(cities)
    }
  }, [state])

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Nombre</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label htmlFor="phone">Teléfono</label>
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div>
        <label htmlFor="company">Empresa</label>
        <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} />
      </div>
      <div>
        <label htmlFor="position">Cargo</label>
        <input type="text" value={position} onChange={(e) => setPosition(e.target.value)} />
      </div>
      <div>
        <label htmlFor="state">Estado</label>
        <select value={state} onChange={handleStateChange}>
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
        <select value={city} onChange={(e) => setCity(e.target.value)}>
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