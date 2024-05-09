import { useContactFormStore } from '../../store/contact-form'
import { useState, useEffect } from 'react'
import './Contact.css'

export function Contact() {
  const { name, email, phone, company, position, state, city, setName, setEmail, setPhone, setCompany, setPosition, setState, setCity } = useContactFormStore()

  const handleSubmit = (e) => {
    e.preventDefault()
    setName('')
    setEmail('')
    setPhone('')
    setCompany('')
    setPosition('')
    setState('')
    setCity('')
    e.target.reset()
    alert(`Gracias por enviar tus datos, ${name}!`)
  }

  const [states, setStates] = useState([])
  const [cities, setCities] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml/CL_GEO_AREA/null/es/BISE/2.0/e6593d42-e989-a9ee-117d-f4bf12620431?type=json');
      const { CODE } = await response.json();
      const states = CODE.filter((code) => code.value.length === 8).slice(0, 32);
      setStates(states);
    };
  
    fetchData();
  }, [])

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://www.inegi.org.mx/app/api/indicadores/desarrolladores/jsonxml/CL_GEO_AREA/null/es/BISE/2.0/e6593d42-e989-a9ee-117d-f4bf12620431?type=json');
      const { CODE } = await response.json();
      const currentState = CODE.find((code) => code.Description === state);
      const cities = currentState ? CODE.filter((code) => code.value.startsWith(currentState.value)).slice(1, -4) : [];
      setCities(cities);
    };
  
    setCity('');
    fetchData();
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
        <select value={state} onChange={(e) => setState(e.target.value)}>
          <option value="" disabled >Selecciona un estado</option>
          {states.map((state) => (
            <option key={state.value} value={state.Description}>
              {state.Description}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="city">Municipio</label>
        <select value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="" disabled >Selecciona un municipio</option>
          {cities.map((city) => (
            <option key={city.value} value={city.Description}>
              {city.Description}
            </option>
          ))}
        </select>
      </div>
      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}