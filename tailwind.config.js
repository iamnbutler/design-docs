const theme = {
  base00: "#191724",
  base01: "#1f1d2e",
  base02: "#26233a",
  base03: "#555169",
  base04: "#6e6a86",
  base05: "#e0def4",
  base06: "#f0f0f3",
  base07: "#c5c3ce",
  base08: "#e2e1e7",
  base09: "#eb6f92",
  base0A: "#f6c177",
  base0B: "#ebbcba",
  base0C: "#31748f",
  base0D: "#9ccfd8",
  base0E: "#c4a7e7",
  base0F: "#e5e5e5"
};

// Provide 16 hex values from a base16 theme to update the system's theme
// Some examples of base16 themes here: https://github.com/chriskempson/base16

module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,md,mdx}",
    "./utils/**/*.{js,ts,jsx,tsx,md,mdx}",
  ],
  theme: {
    extend: {
      colors: theme,
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

