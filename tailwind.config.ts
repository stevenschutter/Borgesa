import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './content/**/*.{md,mdx}',
    './pages/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#3A3A3A',
        gold: '#C6A15B',
        offwhite: '#F4F3EF',
        text: '#1F1F1F',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Cormorant Garamond', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};

export default config;
