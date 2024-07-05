import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export const useRegisterFormStore = create(
    persist(
        (set) => ({
            name: '',
            email: '',
            phone: '',
            company: '',
            position: '',
            country: '',
            state: '',
            city: '',

            setName: (name) => set({ name }),
            setEmail: (email) => set({ email }),
            setPhone: (phone) => set({ phone }),
            setCompany: (company) => set({ company }),
            setPosition: (position) => set({ position }),
            setCountry: (country) => {
                set({ country })
                set({ state: '' })
                set({ city: '' })
            },
            setState: (state) => set({ state }),
            setMexicanState: (state) => {
                set({ state })
                set({ city: '' })
            },
            setCity: (city) => set({ city }),

            reset: () => set({
                name: '',
                email: '',
                phone: '',
                company: '',
                position: '',
                country: '',
                state: '',
                city: '',
            }),
        }),
        {
            name: 'contact-form-storage',
        }
    )
)