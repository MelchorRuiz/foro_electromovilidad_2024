import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useThankYouPageStore = create(
    persist(
        (set) => ({
            isSubmitting: false,
            pdfUrl : '',
            setSubmitting: (isSubmitting) => set({ isSubmitting }),
            setPdfUrl: (pdfUrl) => set({ pdfUrl }),
        }),
        {
            name: "thankyou-page-storage",
        }
    )
);