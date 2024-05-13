import { useForm } from 'react-hook-form'
import { useContactFormStore } from '../../store/contact-form'
import { locationData } from '../../data/constans_states_and_cities'
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
    city, 
    setName,
    setEmail,
    setPhone,
    setCompany,
    setPosition,
    setState, 
    setCity,
    resetForm } = useContactFormStore();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm();

  const onSubmit = (data) => {
    console.log(data)
    reset()
    resetForm()
  }

  const states = Object.keys(locationData)
  const cities = state ? locationData[state] : []

  return (
    <form onSubmit={handleSubmit(onSubmit)}>

      <InputField label="Nombre" defaultValue={name} register={register} errors={errors} name="name"
        validation={{ required: 'El nombre es requerido' }} handleValue={setName}/>

      <InputField label="Email" defaultValue={email} register={register} errors={errors} name="email"
        validation={{ required: 'El email es requerido', pattern: { value: /^\S+@\S+$/i, message: 'Email inválido' } }} 
        handleValue={setEmail}/>

      <InputField label="Teléfono" defaultValue={phone} register={register} errors={errors} name="phone"
        validation={{ required: 'El teléfono es requerido', pattern: { value: /^\d+$/, message: 'Teléfono inválido' } }} 
        handleValue={setPhone}/>

      <InputField label="Empresa" defaultValue={company} register={register} errors={errors} name="company"
        validation={{ required: 'La empresa es requerida' }} 
        handleValue={setCompany}/>

      <InputField label="Cargo" defaultValue={position} register={register} errors={errors} name="position"
        validation={{ required: 'El cargo es requerido' }} 
        handleValue={setPosition}/>

      <SelectField label="Estado" options={states} defaultValue={state} register={register} errors={errors} name="state"
        validation={{ required: 'El estado es requerido' }} 
        handleValue={setState}/>

      <SelectField label="Municipio" options={cities} defaultValue={city} register={register} errors={errors} name="city"
        validation={{ required: 'El municipio es requerido' }} 
        handleValue={setCity}/>

      <br />
      <button type="submit">Enviar</button>
    </form>
  );
}