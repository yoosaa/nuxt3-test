import { defineNuxtConfig } from 'nuxt3'
require('dotenv').config()
const { API_KEY } = process.env

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
    runtimeConfig: {
        // The private keys which are only available within server-side
        apiKey: API_KEY,
        // Keys within public, will be also exposed to the client-side
        public: {
            apiKey: process.env.NODE_ENV === 'production' ? undefined : API_KEY
        }
    }
})
