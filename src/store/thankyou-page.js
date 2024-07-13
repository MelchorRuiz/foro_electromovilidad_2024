import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useThankYouPageStore = create(
    persist(
        (set) => ({
            isSubmitting: false,
            imageQR : '',
            setSubmitting: (isSubmitting) => set({ isSubmitting }),
            setImageQR: (imageQR) => set({ imageQR }),
        }),
        {
            name: "thankyou-page-storage",
        }
    )
);