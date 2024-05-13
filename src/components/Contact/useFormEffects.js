import { useEffect } from 'react';
import { useContactFormStore } from '../../store/contact-form'

export default function useFormEffects(watch) {
  const { name_watch, email_watch, phone_watch, company_watch, position_watch, state_watch, city_watch } = watch;
  const { setName, setEmail, setPhone, setCompany, setPosition, setState, setCity } = useContactFormStore();

  useEffect(() => {
    setName(name_watch)
  }, [name_watch, setName]);

  useEffect(() => {
    setEmail(email_watch)
  }, [email_watch, setEmail]);

  useEffect(() => {
    setPhone(phone_watch)
  }, [phone_watch, setPhone]);

  useEffect(() => {
    setCompany(company_watch)
  }, [company_watch, setCompany]);

  useEffect(() => {
    setPosition(position_watch)
  }, [position_watch, setPosition]);

  useEffect(() => {
    if (state_watch) {
      setState(state_watch)
      setCity('')
    }
  }, [state_watch, setState, setCity]);

  useEffect(() => {
    if (city_watch) {
      setCity(city_watch)
    } 
  }, [city_watch, setCity]);
}