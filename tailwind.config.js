module.exports = {
  mode: "jit",
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'media',
  theme: {
    fontFamily: {
      'ui': 'Inter, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Oxygen-Sans, Ubuntu, Cantarell, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
      'prose': 'Lora, ui-serif, serif',
      'mono': '"Jetbrains Mono", "SF Mono", SFMono-Regular, ui-monospace, "Roboto Mono", monospace',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
