import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://foro-electromovilidad.igeco.mx',
  integrations: [tailwind(), react(), sitemap({
    filter: (page) => 
      page !== 'https://foro-electromovilidad.igeco.mx/gracias-por-registrarte' &&
      page !== 'https://foro-electromovilidad.igeco.mx/en/thanks-for-registering',
    i18n: {
      defaultLocale: "es",
      locales: ["es", "en"]
    }
  })],
  i18n: {
    defaultLocale: "es",
    locales: ["es", "en"]
  }
});