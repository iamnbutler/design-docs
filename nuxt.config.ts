import { defineNuxtConfig } from 'nuxt3'

export default defineNuxtConfig({
    css: ['tailwindcss/tailwind.css'],
    build: {
      postcss: {
        postcssOptions: require('./postcss.config.js'),
      },
    },
  })