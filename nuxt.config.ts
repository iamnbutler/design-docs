import { defineNuxtConfig } from "nuxt3";

export default defineNuxtConfig({
  css: ["tailwindcss/tailwind.css"],
  build: {
    postcss: {
      postcssOptions: require("./postcss.config.js"),
    },
  },
  head: {
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  }
});
