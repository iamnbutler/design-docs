// Provide 16 hex values from a base16 theme to update the system's theme
// Some examples of base16 themes here: https://github.com/chriskempson/base16

const theme = {
  base00: "#1E2025",
  base01: "#23262E",
  base02: "#292E38",
  base03: "#2E323C",
  base04: "#ACA8AE",
  base05: "#CBC9CF",
  base06: "#E1DDE4",
  base07: "#F7F7F8",
  base08: "#F92672",
  base09: "#F39C12",
  base0A: "#FFE66D",
  base0B: "#96E072",
  base0C: "#00E8C6",
  base0D: "#0CA793",
  base0E: "#8A3FA6",
  base0F: "#C74DED",
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
    fontFamily: {
      'serif': ['Lora', 'ui-serif', 'serif']
    },
    extend: {
      colors: theme,
    },
    typography: {
      DEFAULT: {
        css: {
          color: theme.base07,
          fontSize: rem(20),
          lineHeight: round(28 / 16),
          // Links
          a: {
            color: theme.base0B,
            "&:hover": {
              color: theme.base08,
            },
            textDecoration: 'underline',
            fontWeight: '500',
          },
          // Headlines
          h1: {
            color: theme.base07,
            fontSize: rem(32),
            marginTop: em(36, 20),
            marginBottom: em(12, 20),
            fontWeight: '800',
          },
          h2: {
            color: theme.base0D,
            fontSize: rem(24),
            fontWeight: '700',
            marginTop: em(36, 20),
            marginBottom: em(12, 20),
          },
          h3: {
            color: theme.base0D,
            fontSize: rem(20),
            fontWeight: '700',
            marginTop: em(36, 20),
            marginBottom: em(12, 20),
          },
          h4: {
            marginTop: em(36, 20),
            marginBottom: em(12, 20),
            lineHeight: round(32 / 20),
            color: theme.base0C,
            fontWeight: '700',
          },
          'h2 + *': {
            marginTop: '0',
          },
          'h3 + *': {
            marginTop: '0',
          },
          'h4 + *': {
            marginTop: '0',
          },
          // Body
          p: {
            marginTop: em(16, 14),
            marginBottom: em(16, 14),
            fontSize: rem(20),
          },
          // Blockquotes
          blockquote: {
            marginTop: em(16, 14),
            marginBottom: em(16, 14),
            backgroundColor: theme.base01,
            paddingTop: 1,
            paddingRight: 16,
            paddingBottom: 1,
            paddingLeft: 16,
            borderRadius: rem(4),
          },
          // Lists
          ol: {
            marginTop: em(20, 16),
            marginBottom: em(20, 16),
            paddingLeft: em(20, 16),
            listStyleType: 'decimal',
          },
          ul: {
            marginTop: em(20, 16),
            marginBottom: em(20, 16),
            paddingLeft: em(20, 16),
            listStyleType: 'disc',
          },
          li: {
            marginTop: em(8, 16),
            marginBottom: em(8, 16),
          },
          'ol[type="A"]': {
            listStyleType: 'upper-alpha',
          },
          'ol[type="a"]': {
            listStyleType: 'lower-alpha',
          },
          'ol[type="A" s]': {
            listStyleType: 'upper-alpha',
          },
          'ol[type="a" s]': {
            listStyleType: 'lower-alpha',
          },
          'ol[type="I"]': {
            listStyleType: 'upper-roman',
          },
          'ol[type="i"]': {
            listStyleType: 'lower-roman',
          },
          'ol[type="I" s]': {
            listStyleType: 'upper-roman',
          },
          'ol[type="i" s]': {
            listStyleType: 'lower-roman',
          },
          'ol[type="1"]': {
            listStyleType: 'decimal',
          },
          // Nested lists
          'ol > li': {
            paddingLeft: em(6, 14),
          },
          'ul > li': {
            paddingLeft: em(6, 14),
          },
          '> ul > li p': {
            marginTop: em(8, 14),
            marginBottom: em(8, 14),
          },
          '> ul > li > *:first-child': {
            marginTop: em(16, 14),
          },
          '> ul > li > *:last-child': {
            marginBottom: em(16, 14),
          },
          '> ol > li > *:first-child': {
            marginTop: em(16, 14),
          },
          '> ol > li > *:last-child': {
            marginBottom: em(16, 14),
          },
          'ul ul, ul ol, ol ul, ol ol': {
            marginTop: em(8, 14),
            marginBottom: em(8, 14),
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
