import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#020617',
          900: '#0f172a',
          800: '#1e293b',
        },
        teal: {
          400: '#2dd4bf',
        },
        yellow: {
          400: '#facc15',
        },
        rose: {
          500: '#f43f5e',
        },
      },
    },
  },
  plugins: [],
};

export default config;
