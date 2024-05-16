import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: 'var(--font-roboto)',
        alt: 'var(--font-poppins)',
      },
      colors: {
        black:{
          10: '#1A2126',
        },
        gray: {
          10: '#D9D9D9',
          50: '#e8e9e9',
          100: '#dddede',
          200: '#b8babc',
          300: '#1a2126',
          400: '#171e22',
          500: '#151a1e',
          600: '#14191d',
          700: '#101417',
          800: '#0c0f11',
          900: '#090c0d',
        }
      },
    },
    width: {
      '1200': '1200px', // '1200' é o nome da chave que você usará na classe
    },
  },
  plugins: [],
};
export default config;
