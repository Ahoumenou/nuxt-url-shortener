// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-icon",
    "@tailwindcss/typography",
    "@nuxt/content"
  ],
  runtimeConfig: {
    public: {
      appUrl: process.env.APP_URL || "http://localhost:3000"
    }
  },
  tailwindcss: {
    configPath:"tailwind.config.ts"
  }
})