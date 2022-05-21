// Provide 16 hex values from a base16 theme to update the system's theme
// Some examples of base16 themes here: https://github.com/chriskempson/base16

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
  base0F: "#e5e5e5",
};

// Utilities from tailwind typography's default config
// source: https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/styles.js

const round = (num) =>
  num
    .toFixed(7)
    .replace(/(\.[0-9]+?)0+$/, "$1")
    .replace(/\.0$/, "");
const rem = (px) => `${round(px / 16)}rem`;
const em = (px, base) => `${round(px / base)}em`;

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
    typography: {
      DEFAULT: {
        css: {
          color: theme.base07,
          fontSize: rem(16),
          lineHeight: round(28 / 16),
          // Headlines
          h1: {
            color: theme.base09,
          },
          // Body
          p: {
            marginTop: em(16, 14),
            marginBottom: em(16, 14),
          },
          a: {
            color: theme.base09,
            "&:hover": {
              color: theme.base0B,
            },
          },
          // Lists
          ol: {
            marginTop: em(20, 16),
            marginBottom: em(20, 16),
            paddingLeft: em(26, 16),
          },
          ul: {
            marginTop: em(20, 16),
            marginBottom: em(20, 16),
            paddingLeft: em(26, 16),
          },
          li: {
            marginTop: em(8, 16),
            marginBottom: em(8, 16),
          },
          // Dividers
          hr: {
            borderColor: theme.base03,
            marginTop: em(48, 16),
            marginBottom: em(48, 16),
          },
          'hr + *': {
            marginTop: '0',
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
