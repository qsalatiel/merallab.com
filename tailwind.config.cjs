/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: '"Plus Jakarta Sans", sans-serif',
        mono: '"Roboto Mono", monospace;',
      },
    },
  },
  plugins: [],
};
