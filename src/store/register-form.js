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
            state: '',
            city: '',
            isSubmitting: false,

            setName: (name) => set({ name }),
            setEmail: (email) => set({ email }),
            setPhone: (phone) => set({ phone }),
            setCompany: (company) => set({ company }),
            setPosition: (position) => set({ position }),
            setState: (state) => set({ state }),
            setCity: (city) => set({ city }),
            setSubmitting: (isSubmitting) => set({ isSubmitting }),

            reset: () => set({
                name: '',
                email: '',
                phone: '',
                company: '',
                position: '',
                state: '',
                city: '',
            }),
        }),
        {
            name: 'contact-form-storage',
        }
    )
)